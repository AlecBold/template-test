from django.contrib import admin

from .models import Image, Worker

admin.site.register(Image)
admin.site.register(Worker)