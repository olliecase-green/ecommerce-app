from django.contrib import admin
from .models import Review

class ReviewAdmin(admin.ModelAdmin):
  list_display = ('product', 'review', 'stars')

admin.site.register(Review, ReviewAdmin)