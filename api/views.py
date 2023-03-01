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

@api_view(['POST'])
def post_review(request):
  serializer = ReviewSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)