# Generated by Django 4.1.6 on 2023-03-29 20:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_review_stars'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='stars',
        ),
    ]
