from django.urls import path
from . import api

urlpatterns = [

    path("animals/", api.GetAnimals.as_view()),
    path("animals/delete/", api.DeleteAnimal.as_view()),
    path("animal_types/", api.GetAnimalTypes.as_view()),

]
