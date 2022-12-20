from django.urls import path
from . import api

urlpatterns = [
    path("animals/", api.GetAnimals.as_view({'get' : 'list'})),
    path("animal_types/", api.GetAnimalTypes.as_view({'get' : 'list'})),

]
