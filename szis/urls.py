from django.contrib import admin
from django.conf.urls import handler404
from django.urls import include, path, re_path
#from rest_framework.authtoken import views as authviews
from rest_framework import routers
from szis.token import CustomAuthToken
from django.conf import settings
#from django.conf.urls.static import static
#from django.conf.urls import url
from django.conf import settings
from django.views.static import serve
from . import views



router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'report', views.ZaprosViewSet)
router.register(r'phone', views.PhoneViewSet)
router.register(r'book', views.HandbookViewSet)

handler404 = 'szis.views.page_not_found'


urlpatterns = [
    path('', views.index, name="home"),
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    re_path(r'^assets/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    path('api/v1/', include(router.urls)),
    path('api/v1/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/v1/token/auth/', CustomAuthToken.as_view()), # authviews.obtain_auth_token
    path('api/v1/logout/', views.user_logout, name='logout'),
    path('admin/', admin.site.urls),
    path('api/v1/reset/password', views.ResetPassword.as_view(), name='reset_password'), 
    path('api/v1/me/<str:token>', views.current_user),
    path('info', views.info)
]