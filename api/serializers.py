from rest_framework import serializers
from products import models as product_models
from reviews import models as review_models

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = product_models.Product
    fields = ('id', 'name', 'price', 'stock', 'image_url')

class OfferSerializer(serializers.ModelSerializer):
  class Meta:
    model = product_models.Offer
    fields = ('code', 'description', 'discount')

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = review_models.Review
    fields = ('review', 'user')