from django.db import models

class Review(models.Model):
    user = models.CharField(max_length=255)
    product = models.CharField(max_length=50)
    review = models.CharField(max_length=2083)
    stars = models.IntegerField()