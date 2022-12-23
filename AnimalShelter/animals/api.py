from rest_framework.views import APIView
from .models import Animal,AnimalType
from .serializers import *
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from .resources import AnimalResource
from tablib import Dataset

class AnimalImportExcelView(APIView):

    def post(self,request):

        new_animal = request.FILES['excel_file']

        if not new_animal.name.endswith("xlsx"):
            return Response('Wrong format',status=400)
        
        ids = []
        imported_data = Dataset().load(new_animal.read(),format='xlsx')
  
        for data in imported_data:
           
            obj = Animal.objects.create(name = data[0],weight = data[1])
            ids.append(obj.id)

        animals = Animal.objects.filter(id__in=ids)
        serialazer = AnimalsListSerializer(animals,many = True)

        return Response(serialazer.data,status=200)
        
       

class AnimalTypeView(APIView):

    def get(self,request):

        animal_types = AnimalType.objects.all()
        serialazer = AnimalTypesListSerializer(animal_types,many = True)
        return Response(serialazer.data)

    def post(self,request):
        animal_type = AnimalTypeCreateSerializer(data=request.data,context={'request': request})
        
        if animal_type.is_valid(raise_exception=True):
                  
            obj = animal_type.save()
            return Response(obj.id,status=200)
            
        else:
            return Response('Invalid create animal type',status=400)
    

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