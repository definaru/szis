from django.contrib import admin
from django.utils.html import format_html
from szis.forms import RankForm
from szis.models import Information, Rank, UserProfile, Zapros, Phone, Division, Position, Handbooks, Subdivision
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe
from django.conf import settings


admin.site.site_header = settings.HEADER
admin.site.site_title = "Панель администрирования"
admin.site.index_title = settings.DESCRIPTION



@admin.register(Position)
class PositionAdmin(admin.ModelAdmin):
    list_display = ['user', 'person', 'name']

    @admin.display(description='Ф.И.О.')
    def person(self, obj):
        return f'{obj.user.last_name} {obj.user.first_name}'



@admin.register(Information)
class InformationAdmin(admin.ModelAdmin):
    list_display = ['user', 'datetime', 'name', 'script', 'message', 'method', 'caller']



@admin.register(Zapros)
class ZaprosAdmin(admin.ModelAdmin):
    list_display = ['company', 'status', 'operator', 'datetime']

    @admin.display(description='Название компании')
    def company(self, obj):
        return f"Zapros №{obj.company_id}"



@admin.register(Phone)
class PhoneAdmin(admin.ModelAdmin):
    list_display = ['username', 'num_phone', 'type', 'otdel_id']
    
    @admin.display(description='Ф.И.О.')
    def username(self, obj):
        return format_html(f'<a href="/admin/auth/user/{obj.user.id}">{obj.user.last_name} {obj.user.first_name}</a>')

    @admin.display(description='Номер телефона')
    def num_phone(self, obj):
        result = obj.phone
        return format_html(f'<a href="tel:{result}">{result}</a>')



@admin.register(Division)
class DivisionAdmin(admin.ModelAdmin):
    list_display = ['user', 'section', 'type'] #, 'otdel'
    raw_id_fields = ['otdel', ]
    
    @admin.display(description='Ф.И.О.')
    def user(self, obj):
        return format_html(f'<p>{obj.otdel.user.first_name} {obj.otdel.user.last_name}</p>')
    
    @admin.display(description='Телефон')
    def section(self, obj):
        return format_html(f'<p>{obj.otdel.phone}</p>')



@admin.register(Rank)
class RankAdmin(admin.ModelAdmin):
    list_display = ['meaning', 'name']



@admin.register(Subdivision)
class SubdivisionAdmin(admin.ModelAdmin):
    list_display = ['value', 'key']



@admin.register(Handbooks)
class HandbooksAdmin(admin.ModelAdmin):
    list_display = ['avatar', 'name', 'rank', 'phone', 'division', 'location', 'status']
    form = RankForm
    fields = ['photo', 'preview', 'name', 'rank', 'phone', 'division', 'location', 'user', 'status']
    readonly_fields = ["preview"]

    @admin.display(description='Превью')
    def preview(self, obj):
        styles = 'border-radius: 7px;width: 70px'
        if obj.photo:
            photo = obj.photo.url
        else: 
            photo = '/media/images/no_photo.jpg'
        return mark_safe(f'<img src="{photo}" alt="{obj.name}" style="{styles}" />')
    
    @admin.display(description='Фотография')
    def avatar(self, obj):
        styles = 'width: 50px;height: 50px;object-fit: cover;border-radius: 7px'
        if obj.photo:
            photo = obj.photo.url
        else: 
            photo = '/media/images/no_photo.jpg'
        return mark_safe(f'<img src="{photo}" alt="{obj.name}" style="{styles}" />')



class UserInline(admin.StackedInline):
    model = UserProfile
    readonly_fields = ["preview"]
    can_delete = False
    verbose_name_plural = 'Доп. информация'

    @admin.display(description='Аватарка')
    def preview(self, obj): # avatar
        return mark_safe(f'<img src="{obj.avatar.url}">')
 


# Определяем новый класс настроек для модели User
class UserAdmin(UserAdmin):
    inlines = (UserInline, )
 
# Перерегистрируем модель User
admin.site.unregister(User)
admin.site.register(User, UserAdmin)