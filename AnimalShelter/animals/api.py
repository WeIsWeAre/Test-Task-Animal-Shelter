from rest_framework.views import APIView
from .models import Animal,AnimalType
from .serializers import *
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action

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

#action(methods=["DELETE"], detail = False)
class DeleteAnimal(APIView):

    def post(self,request):

        tupl = ()
        for id in request.data.values():
            print(id)
            tupl += tuple(id)
           
        animals = Animal.objects.filter(id__in=tupl)

        if animals:
            animals.delete()
            return Response(status = 200)
        else:
            return Response(('Invalid delete animal'),status=400)
       