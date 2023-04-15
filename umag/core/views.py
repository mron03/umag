from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *


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
    

