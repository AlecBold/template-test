from django.db import models


class Image(models.Model):
    image = models.ImageField()
    name = models.CharField(max_length=50)


class Worker(models.Model):
    image = models.ImageField()
    name = models.CharField(max_length=50)
    info = models.CharField(max_length=100)
    background_color = models.CharField(max_length=50)
