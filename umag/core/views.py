from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from .models import React, Sale, Supply
from rest_framework.response import Response
from .serializer import *
from datetime import date

class ReactView(APIView):
    serializer_class = ReactSerializer
    
    def get(self, request):
        output = [{"email" : output.email, "password" : output.password} for output in React.objects.all()]

        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer(data = request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
def index(request):
    return render(request, 'index.html')
    
def getSupply(request, pk):
    supply = Supply.objects.get(id=pk)

    return JsonResponse({'id' : int(pk), 'barcode' : supply.barcode, 'price' : supply.price, 'quantity' : supply.quantity, 'supplyTime' : supply.supply_time})
    

def getSupplyList(request):
    barcode = request.GET.get('barcode')
    fromTime = request.GET.get('fromTime')
    toTime = request.GET.get('toTime') 

    supplyList = Supply.objects.filter(barcode=barcode, supply_time__range=[fromTime, toTime])
  
    return JsonResponse([{'id' : supply.id, 'barcode' : supply.barcode, 'price' : supply.price, 'quantity' : supply.quantity, 'supplyTime' : supply.supply_time} for supply in supplyList], safe=False)
