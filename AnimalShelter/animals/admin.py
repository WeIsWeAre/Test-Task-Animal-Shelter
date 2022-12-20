from django.contrib import admin

from .models import AnimalType,Animal

admin.site.register(AnimalType)
admin.site.register(Animal)