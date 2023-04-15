from django.urls import path
from . import views

urlpatterns = [
    # path('', views.ReactView.as_view(), name='anything'),
    path('', views.index, name='index'),
    path('api/supplies', views.getSupplyList, name='getSupplyList'),
    path('api/supplies/<str:pk>/', views.getSupply, name='getSupply'),
]