from django.contrib import admin
from django.utils.html import format_html
from szis.models import UserProfile, Zapros, Phone, Division
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe
from django.conf import settings


admin.site.site_header = settings.HEADER
admin.site.site_title = "Панель администрирования"
admin.site.index_title = settings.DESCRIPTION


@admin.register(Zapros)
class ZaprosAdmin(admin.ModelAdmin):
    list_display = ['company', 'status', 'operator', 'datetime']
    def company(self, obj):
        return f"Zapros №{obj.company_id}"
    company.short_description = "Название компании"


@admin.register(Phone)
class PhoneAdmin(admin.ModelAdmin):
    list_display = ['username', 'num_phone', 'type', 'otdel_id']
    
    def username(self, obj):
        return format_html(f'<a href="/admin/auth/user/{obj.user.id}">{obj.user.last_name} {obj.user.first_name}</a>')
    username.short_description = "Ф.И.О."

    def num_phone(self, obj):
        result = obj.phone
        return format_html(f'<a href="tel:{result}">{result}</a>')
    num_phone.short_description = "Номер телефона"



@admin.register(Division)
class DivisionAdmin(admin.ModelAdmin):
    list_display = ['user', 'section', 'type'] #, 'otdel'
    raw_id_fields = ['otdel', ]
    
    def user(self, obj):
        return format_html(f'<p>{obj.otdel.user.first_name} {obj.otdel.user.last_name}</p>')
    user.short_description = "Ф.И.О."
    
    def section(self, obj):
        return format_html(f'<p>{obj.otdel.phone}</p>')
    section.short_description = "Телефон"


class UserInline(admin.StackedInline):
    model = UserProfile
    readonly_fields = ["preview"]
    can_delete = False
    verbose_name_plural = 'Доп. информация'

    def preview(self, obj): # avatar
        return mark_safe(f'<img src="{obj.avatar.url}">')
    preview.short_description = "Аватарка"
 


# Определяем новый класс настроек для модели User
class UserAdmin(UserAdmin):
    inlines = (UserInline, )
 
# Перерегистрируем модель User
admin.site.unregister(User)
admin.site.register(User, UserAdmin)