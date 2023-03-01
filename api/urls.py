from django.urls import path
from .views import get_products, get_offers, post_review, get_reviews

urlpatterns = [
  path('products/', get_products),
  path('offers/', get_offers),
  path('reviews/', get_reviews),
  path('reviews/post', post_review)
]