from django.contrib import admin

from .models import AnimalType,Animal

admin.site.register(Animal,AnimalType)