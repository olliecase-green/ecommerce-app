# Generated by Django 4.1.4 on 2023-03-05 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0002_review_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='stars',
            field=models.IntegerField(default=3),
            preserve_default=False,
        ),
    ]
