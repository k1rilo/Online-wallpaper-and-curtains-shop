from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stockquantity = models.CharField(max_length=100)

    def __str__(self):
        return self.name