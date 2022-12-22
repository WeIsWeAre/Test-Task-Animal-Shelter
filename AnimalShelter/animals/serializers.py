from .models import AnimalType,Animal
from rest_framework import serializers

class AnimalsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Animal
        fields = '__all__'

class AnimalTypesListSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnimalType
        fields = '__all__'

class AnimalCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Animal
        fields = '__all__'