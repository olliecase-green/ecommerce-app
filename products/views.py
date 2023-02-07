from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product

def main_page(request):
  context = {}
  return render(request, "index.html", context)

@api_view(['GET', 'POST'])
def view_products(request):
  if request.method == 'GET':
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
  elif request.method == 'POST':
      serializer = ProductSerializer(data=request.data)
      if serializer.is_valid():
          serializer.save()
          return Response(status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
@api_view(['DELETE'])
def delete_products(request, pk):
  try:
    note = Product.objects.get(pk=pk)
  except Product.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'DELETE':
    note.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)

