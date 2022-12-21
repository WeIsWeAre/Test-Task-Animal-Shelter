from rest_framework.views import APIView
from .models import Animal,AnimalType
from .serializers import *
from rest_framework.response import Response
from rest_framework import viewsets

class GetAnimals(APIView):

    def get(self,request):

        animals = Animal.objects.all()
        serialazer = AnimalsListSerializer(animals,many = True)
        return Response(serialazer.data)

class GetAnimalTypes(APIView):

    def get(self,request):

        animal_types = AnimalType.objects.all()
        serialazer = AnimalTypesListSerializer(animal_types,many = True)
        return Response(serialazer.data)