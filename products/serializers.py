from rest_framework import serializers
from . import models

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Product
    fields = ('id', 'name', 'price', 'stock', 'image_url')

class OfferSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Offer
    fields = ('code', 'description', 'discount')