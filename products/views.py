from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer, OfferSerializer
from .models import Product, Offer

@api_view()
def get_products(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)

@api_view()
def get_offers(request):
  offers = Offer.objects.all
  serializer = OfferSerializer(offers, many=True)
  return Response(serializer.data)