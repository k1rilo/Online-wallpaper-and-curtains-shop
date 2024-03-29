from django.shortcuts import render
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.permissions import IsAdminUser



class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.OrderingFilter,
                       DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['name']
    filterset_fields = ['category']
    ordering_fields = ['name', 'id', 'price', 'category']
    ordering = ['name', 'id', 'price', 'category']


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductCreate(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductUpdate(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDelete(generics.DestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
