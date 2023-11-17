import secrets
from string import ascii_lowercase, ascii_uppercase, digits
from django.http import JsonResponse
from django.contrib.auth.models import User
from szis.models import Zapros, Phone, Handbook
from django.core.mail import EmailMultiAlternatives
from szis.serializers import HandbookSerializer, PhoneSerializer, UserSerializer, ZaprosSerializer
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.template.loader import render_to_string
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from django.conf import settings
from datetime import datetime
from user_agents import parse

        

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            request.user.auth_token.delete()
            return Response({'message': 'Успешный выход из системы.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 1000


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, ]


class ZaprosViewSet(viewsets.ModelViewSet):
    queryset = Zapros.objects.all()
    serializer_class = ZaprosSerializer
    permission_classes = [IsAuthenticated, ]
    pagination_class = StandardResultsSetPagination


class PhoneViewSet(viewsets.ModelViewSet):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
    permission_classes = [IsAuthenticated, ]


class HandbookViewSet(viewsets.ModelViewSet):
    queryset = Handbook.objects.all()
    serializer_class = HandbookSerializer
    permission_classes = [IsAuthenticated, ]


def domain(request):
    url = request.META.get('HTTP_HOST')
    protocol = request.scheme
    return protocol+'://'+url


def index(request):
    arr = [
        {
            'name': settings.HEADER,
            'description': settings.DESCRIPTION,
            'version': '0.1.6',
            'domain': 'https://szis.netlify.app',
            'info': domain(request)+'/info',
            'api': domain(request)+'/api/v1/',
            'support': {
                'text': 'Служба технической поддержки',
                'phone': settings.DEFAULT_PHONE,
                'email': settings.DEFAULT_SUPPORT_EMAIL                
            }
        }
    ]
    return JsonResponse(arr[0], safe=False)


def reports(request):
    data = Zapros.objects.all().values()
    return JsonResponse(list(data), safe=False)


def current_user(request, token):
    auth = Token.objects.filter(key=token).values()
    if not auth:
        return is_error_user()
    else:
        user_id = list(auth)[0]['user_id']
        response = User.objects.filter(id=user_id).values(
            'id', 
            'is_superuser', 
            'last_login',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_active'
        )
        return JsonResponse(list(response)[0], safe=False)
    


def info(request):
    ip = request.META.get('REMOTE_ADDR')
    useragent = request.META.get('HTTP_USER_AGENT')
    username = request.META.get('USERNAME')
    data = [ # https://pypi.org/project/user-agents/
        {
            'debug': settings.DEBUG,
            'datetime': datetime.now(),
            'base_dir': settings.BASE_DIR,
            'languages': settings.LANGUAGE_CODE,
            'time_zone': settings.TIME_ZONE,
            'useragent': useragent,
            'username': username,
            'ip': ip
        }
    ]
    return JsonResponse(list(data)[0], safe=False)


def report(request, id):
    response = Zapros.objects.filter(id=id).values()
    if not response:
        error = {
            'error': True,
            'message': 'Нет таких данных',
            'type': 'error',
            'color': 'danger'
        }
        return JsonResponse(error, safe=False)
    return JsonResponse(list(response), safe=False)


def page_not_found(request, exception):
    arr = {
        'header': 'Ошибка 404',
        'message': 'Нет такой страницы',
        'color': 'danger'
    }
    return JsonResponse(arr, safe=False)


def is_error_user():
    error = {
        'error': True,
        'message': 'Пользователь не авторизован',
        'type': 'error',
        'color': 'danger'
    }
    return JsonResponse(error, safe=False)


def generate_password(length):
    letters = ascii_lowercase+ascii_uppercase+digits
    password = ''.join(secrets.choice(letters) for i in range(length))
    return password


class ResetPassword(APIView):
    def post(self, request):
        if request.method == 'POST':
            to_email = request.POST.get("email")
            subject = 'Восстановление пароля'
            from_email = settings.DEFAULT_FROM_EMAIL
            user = User.objects.filter(email=to_email)
            data = {
                'email': to_email,
                'password': generate_password(20),
                'name': settings.HEADER,
                'support_mail': settings.DEFAULT_SUPPORT_EMAIL,
                'support_phone': settings.DEFAULT_PHONE,
                'user': user.first()
            }
            isvalid = user.exists()
            if isvalid:
                arr = {
                    'header': 'Отлично! Проверьте почту.',
                    'message': 'Мы отправили новый пароль на вашу почту',
                    'email': to_email,
                    'is_valid': isvalid
                }
                html_content = render_to_string('mail/resetpassword.html', data)
                msg = EmailMultiAlternatives(subject, html_content, from_email, [to_email])
                msg.attach_alternative(html_content, "text/html")
                msg.send(fail_silently=False)                
            else: 
                arr = {
                    'header': 'Ошибка!',
                    'message': 'Нет такого пользователя, или почта указана не верно',
                    'email': to_email,
                    'is_valid': isvalid
                }
            return JsonResponse(arr, safe=False)