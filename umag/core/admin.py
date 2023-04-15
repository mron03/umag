from django.contrib import admin
from .models import React, Sale, Supply

admin.site.register(React)

class SaleAdmin(admin.ModelAdmin):
    list_display = ['barcode', 'quantity', 'price', 'sale_time']

class SupplyAdmin(admin.ModelAdmin):
    list_display = ['barcode', 'quantity', 'price', 'supply_time']
    
admin.site.register(Sale, SaleAdmin)
admin.site.register(Supply, SupplyAdmin)
