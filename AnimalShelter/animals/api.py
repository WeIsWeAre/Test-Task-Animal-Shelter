from rest_framework.views import APIView
from .models import Animal,AnimalType
from .serializers import *
from rest_framework.response import Response
from rest_framework import viewsets

class GetAnimals(viewsets.ReadOnlyModelViewSet):

    def get(self,request):

        animals = Animal.objects.all()
        serialazer = AnimalsListSerializer(animals)
        return Response(serialazer.data)

class GetAnimalTypes(viewsets.ReadOnlyModelViewSet):

    def get(self,request):

        animal_types = AnimalType.objects.all()
        serialazer = AnimalTypesListSerializer(animal_types)
        return Response(serialazer.data)