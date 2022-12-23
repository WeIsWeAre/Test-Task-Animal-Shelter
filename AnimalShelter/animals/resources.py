from import_export import resources
from .models import Animal

class AnimalResource(resources.ModelResource):
    class meta:
        model = Animal