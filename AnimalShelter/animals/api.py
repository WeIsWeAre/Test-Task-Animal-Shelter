from rest_framework.views import APIView
from .models import Animal,AnimalType
from .serializers import *
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action

class AnimalTypeView(APIView):

    def get(self,request):

        animal_types = AnimalType.objects.all()
        serialazer = AnimalTypesListSerializer(animal_types,many = True)
        return Response(serialazer.data)

class AnimalsView(APIView):

    def get(self,request):

        animals = Animal.objects.all()
        serialazer = AnimalsListSerializer(animals,many = True)
        return Response(serialazer.data)

    def post(self,request):
        animal = AnimalCreateSerializer(data=request.data,context={'request': request})
        
        if animal.is_valid(raise_exception=True):
                  
            obj = animal.save()
            return Response(obj.id,status=200)
            
        else:
            return Response('Invalid create animal',status=400)

    def patch(self,request,id):

        animal = Animal.objects.get(id = id)
        cnange_animal = AnimalChangeSerializer(animal,data=request.data,context={'request': request})

        if cnange_animal.is_valid(raise_exception=True):
            cnange_animal.save()
            return Response(status = 200)
        else:
            return Response('Invalid change animal',status=400)


class AnimalDeleteView(APIView):
    #action(methods=["DELETE"], detail = False)
    def post(self,request):

        tupl = ()
        for id in request.data.values():
            tupl += tuple(id)

        animals = Animal.objects.filter(id__in=tupl)
  
        if animals:
            animals.delete()
            return Response(status = 200)
        else:
            return Response(('Invalid delete animal(s)'),status=400)
class AnimalTypeDeleteView(APIView):
    
    def post(self,request):

        tupl = ()
        for id in request.data.values():
            tupl += tuple(id)
           
        animal_types = AnimalType.objects.filter(id__in=tupl)

        if animal_types:
            animal_types.delete()
            return Response(status = 200)
        else:
            return Response(('Invalid delete animal type(s)'),status=400)