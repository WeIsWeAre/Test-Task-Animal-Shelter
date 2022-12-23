from django.urls import path
from . import api

urlpatterns = [

    path("animal_types/delete/", api.AnimalTypeDeleteView.as_view()),
    path("animals/delete/", api.AnimalDeleteView.as_view()),

    path("animals/import_excel/", api.AnimalImportExcelView.as_view()),

    path("animals/<id>/", api.AnimalsView.as_view()),
    path("animals/", api.AnimalsView.as_view()),

    path("animal_types/", api.AnimalTypeView.as_view()),
]
