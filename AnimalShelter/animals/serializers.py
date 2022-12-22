from .models import AnimalType,Animal
from rest_framework import serializers

class AnimalsListSerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if not data['name_type']:
            data['name_type'] = ""
        return data
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
class AnimalChangeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Animal
        fields = ('__all__')