from django.db import models
class AnimalType(models.Model):
    name_type = models.CharField(max_length=25, blank = True, null = False)

    def __str__ (self):
        return self.name_type
class Animal(models.Model):
    name = models.CharField(max_length=25, blank = True, null = False)
    name_type = models.ForeignKey(AnimalType,related_name='animals',null = True, on_delete=models.SET_NULL)
    weight = models.IntegerField(default = 0)

    def __str__ (self):
        return self.name
