![Django](https://static.djangoproject.com/img/logos/django-logo-negative.1d528e2cb5fb.png)


# Для старта

Чтобы начать установку, убедитесь, что у вас установлен Python

`python -V`

---

и pip пакетный менеджер

`pip3 -V`


## Ставим зависимости

Выполните команду:

`pip install requirements.txt`


## Настройка базы данных

После успешной установки, выполнить:

`mkdir migrations && cd migrations && > __init__.py`


Убедитесь, что папка "migrations" появилась в папке проекта, а не в корневой папке.
Так же добавьте файл `.env` с логинами и паролями,
после можно выполнить миграции:


`python manage.py makemigrations`

`python manage.py migrate`



## Управление Админ-панелью

После успешный миграций, создайте себе суперпользователя:

`python manage.py createsuperuser`



## Настройка файловой системы

Далее, осталось сделать коллекцию, чтобы появились папки для статики и файлов

`python manage.py collectstatic`


Ваш проект готов к запуску:

```python
python manage.py runserver
```


Вы можете зайти через `SSH` и выполнить sql команды для наполнения БАЗЫ ДАННЫХ.

> Приятного пользования :smile:


**P.S.** Вы должны были получить эти файлы:

| Список |
| ------ |
| env.md |
| sql.md |



