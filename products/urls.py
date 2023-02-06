from django.urls import path
from .views import view_products, delete_products

urlpatterns = [
  path('products/', view_products),
  path('products/<int:pk>/', delete_products),
]