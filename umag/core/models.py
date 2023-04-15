from django.db import models

# Create your models here.

class React(models.Model):
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)


class Sale(models.Model):
    barcode = models.BigIntegerField()
    quantity = models.IntegerField()
    price = models.IntegerField()
    sale_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'sale'
    
    def __str__(self) -> str:
        return str(self.barcode)


class Supply(models.Model):
    barcode = models.BigIntegerField()
    quantity = models.IntegerField()
    price = models.IntegerField()
    supply_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'supply'

    def __str__(self) -> str:
        return str(self.barcode)