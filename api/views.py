from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer, OfferSerializer, ReviewSerializer
from products.models import Product, Offer
from reviews.models import Review

# PRODUCTS
@api_view()
def get_products(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def add_product(request):
  serializer = ProductSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['DELETE'])
def delete_product(request, pk):
  try:
    product = Product.objects.filter(pk=pk)
  except Product.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'DELETE':
    product.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# OFFERS
@api_view()
def get_offers(request):
  offers = Offer.objects.all()
  serializer = OfferSerializer(offers, many=True)
  return Response(serializer.data)

# REVIEWS
@api_view()
def get_reviews(request):
  reviews = Review.objects.all()
  serializer = ReviewSerializer(reviews, many=True)
  return Response(serializer.data)

@api_view()
def post_review(request):
  serializer = ReviewSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)