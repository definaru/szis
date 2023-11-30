from django.db import models 
from datetime import datetime
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from szis.data.datalist import *
#LIST_OF_OPERATORS, STATUS, TYPE_NUMBER_PHONE, TYPE_SCRIPT, TYPE_SECTION, TYPE_POSITION, TYPE_METHOD
from django.contrib.auth.models import User



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


class Rank(models.Model):
    id = models.AutoField(primary_key = True)
    meaning = models.CharField(max_length=64, null=False, verbose_name='Значение', help_text='Данные для заполнения поля')
    name = models.CharField(max_length=255, null=False, verbose_name='Полное наименование', help_text='Видимое значение из списка')
    
    class Meta:
        verbose_name = 'звание'
        verbose_name_plural = 'Список званий'
    
    def __str__(self): # ({self.name})
        return f'{self.meaning}'
    

class Subdivision(models.Model):
    id = models.AutoField(primary_key = True)
    key = models.CharField(max_length=64, null=False, verbose_name='Значение', help_text='Данные для заполнения поля')
    value = models.CharField(max_length=255, null=False, verbose_name='Название подразделения', help_text='Видимое значение из списка')
    
    class Meta:
        verbose_name = 'полразделение'
        verbose_name_plural = 'Список подразделений'
    
    def __str__(self):
        return self.value


# class Handbook(models.Model):
#     id = models.AutoField(primary_key = True)
#     #rank = models.ForeignKey(Rank, null=True, on_delete = models.CASCADE, related_name='rank', verbose_name='Звание')
#     rank = models.CharField(max_length=255, null=True, verbose_name='Звание')
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='book', verbose_name='ID пользователя')
#     photo = models.ImageField(upload_to='images/photo/book', null=True, verbose_name='Фотография')
#     name = models.CharField(max_length=255, null=False, verbose_name='Ф.И.О.')
#     phone = models.CharField(max_length=64, null=False, verbose_name='Номера телефона')
#     #subdivision = models.ForeignKey(Subdivision, null=True, on_delete = models.CASCADE, related_name='subdivision', verbose_name='Подразделение')
#     subdivision = models.CharField(max_length=255, null=False, verbose_name='Подразделение')
#     location = models.CharField(max_length=255, null=True, verbose_name='Локация')
#     status = models.BooleanField(verbose_name='Статус')

#     class Meta:
#         verbose_name = 'запись'
#         verbose_name_plural = 'Телефонный справочник'
    
#     def __str__(self):
#         return self.name
    

class Handbooks(models.Model):
    id = models.AutoField(primary_key = True)
    rank = models.CharField(max_length=255, null=True, verbose_name='Звание')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='book', verbose_name='ID пользователя')
    photo = models.ImageField(upload_to='images/photo/book', null=True, verbose_name='Фотография')
    name = models.CharField(max_length=255, null=False, verbose_name='Ф.И.О.')
    phone = models.CharField(max_length=64, null=False, verbose_name='Номера телефона')
    division = models.CharField(max_length=255, null=False, verbose_name='Подразделение')
    location = models.CharField(max_length=255, null=True, verbose_name='Локация')
    status = models.BooleanField(verbose_name='Статус')

    class Meta:
        verbose_name = 'запись'
        verbose_name_plural = 'Телефонный справочник'
    
    def __str__(self):
        return self.name


class Information(models.Model):
    id = models.AutoField(primary_key = True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user', verbose_name='ID пользователя')
    datetime = models.DateTimeField(verbose_name='Дата создания')
    name = models.CharField(max_length=255, null=False, verbose_name='Название сценария')
    script = models.CharField(max_length=100, null=True, verbose_name='Выбор сценария', choices=TYPE_SCRIPT)
    message = models.CharField(max_length=255, null=True, verbose_name='Сообщение оповещения')
    method = models.CharField(max_length=100, null=True, verbose_name='Выбрать метод', choices=TYPE_METHOD)
    caller = models.CharField(max_length=255, null=True, verbose_name='Выбор абонентов')
    
    class Meta:
        verbose_name = 'сценарий'
        verbose_name_plural = 'Сценарии информирования'
    