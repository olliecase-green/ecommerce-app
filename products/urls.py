from django.urls import path
from .views import get_products, get_offers

urlpatterns = [
  path('products/', get_products),
  path('offers/', get_offers)
]