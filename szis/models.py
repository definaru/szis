from django.db import models 
from datetime import datetime
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from szis.data.datalist import LIST_OF_OPERATORS, STATUS, TYPE_NUMBER_PHONE, TYPE_SECTION, TYPE_POSITION, TYPE_RANK, TYPE_DIVISION
from django.contrib.auth.models import User
from rest_framework.reverse import reverse



@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='photo')
    avatar = models.ImageField(upload_to='images/users', verbose_name='Фотография')
 
    class Meta:
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'
    
    def __str__(self):
        return 'пользователя (можно добавить только одно фото)'


 
class Zapros(models.Model):
    id = models.AutoField(primary_key = True) 
    company_id = models.IntegerField(null=True, verbose_name='Название Компании')
    status = models.CharField(max_length=64, null=True, verbose_name='Статус', choices=STATUS)
    username = models.CharField(max_length=64, null=True, verbose_name='Имя пользователя')
    operator = models.CharField(max_length=64, null=False, verbose_name='Оператор', choices=LIST_OF_OPERATORS)
    datetime = models.DateTimeField(default=datetime.now, verbose_name='Дата и время')
    address = models.TextField(null=False, verbose_name='Адрес')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='users', verbose_name='ID пользователя')
    radius = models.CharField(max_length=64, null=True, verbose_name='Радиус')
    message = models.TextField(null=True, verbose_name='Сообщение')
    longitude = models.CharField(max_length=64, null=True, verbose_name='Долгота')
    latitude = models.CharField(max_length=64, null=True, verbose_name='Широта')

    class Meta:
        verbose_name = 'запросы'
        verbose_name_plural = 'Список запросов'
    
    def __repr__(self):
        return f"Zapros {self.company_id}..."
    



class Phone(models.Model):
    id = models.AutoField(primary_key = True) 
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='phones', verbose_name='ID пользователя')
    otdel_id = models.IntegerField(null=True, verbose_name='ID Отдела')
    type = models.CharField(max_length=64, null=False, verbose_name='Тип номера', choices=TYPE_NUMBER_PHONE) # рабочий\дополнительный
    phone = models.CharField(max_length=64, null=False, verbose_name='Номера телефона')

    class Meta:
        verbose_name = 'номера телефонов'
        verbose_name_plural = 'Список номеров'

    # def __str__(self):
    #        return self.user
    
    def __unicode__(self):
        return self.otdel_id


class Division(models.Model):                    
    # LIST_USER = [(obj.pk, obj.user) for obj in Phone.objects.all()]
    # choices=LIST_USER,
    id = models.AutoField(primary_key = True) 
    otdel = models.ForeignKey(Phone, on_delete=models.CASCADE, related_name='section', verbose_name='ID пользователя телефона')
    type = models.CharField(max_length=64, null=False, verbose_name='Подразделение', choices=TYPE_SECTION)

    class Meta:
        verbose_name = 'подразделение'
        verbose_name_plural = 'Подразделения'
    
    def __str__(self):
        return self.type
    #'Вы можете привязать определённый номер к конкретному подразделению.'


class Position(models.Model):
    id = models.AutoField(primary_key = True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='position', verbose_name='ID пользователя')
    name = models.CharField(max_length=100, null=False, verbose_name='Должность', choices=TYPE_POSITION)

    class Meta:
        verbose_name = 'должность'
        verbose_name_plural = 'Список должностей'
    
    def __str__(self):
        return self.name


class Scenarios(models.Model):
    id = models.AutoField(primary_key = True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='script', verbose_name='ID пользователя')
    name = models.CharField(max_length=100, null=False, verbose_name='Название сценария')
    datetime = models.DateTimeField(verbose_name='Дата создания')


class Handbook(models.Model):
    id = models.AutoField(primary_key = True)
    rank = models.CharField(max_length=100, null=False, verbose_name='Звание', choices=TYPE_RANK)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='book', verbose_name='ID пользователя')
    photo = models.ImageField(upload_to='images/photo/book', null=True, verbose_name='Фотография')
    name = models.CharField(max_length=255, null=False, verbose_name='ФИО')
    phone = models.CharField(max_length=64, null=False, verbose_name='Номера телефона')
    subdivision = models.CharField(max_length=64, null=False, verbose_name='Подразделение', choices=TYPE_DIVISION)
    location = models.CharField(max_length=255, null=True, verbose_name='Локация')
    status = models.BooleanField(verbose_name='Статус')

    class Meta:
        verbose_name = 'запись'
        verbose_name_plural = 'Телефонный справочник'
    
    def __str__(self):
        return self.name