from django.db import models

class Review(models.Model):
    review = models.CharField(max_length=2083)
    user = models.CharField(max_length=255)