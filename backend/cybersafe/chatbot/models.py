from django.db import models

# Create your models here.
class Tip(models.Model):
    title = models.CharField(max_length=250)
    context = models.TextField()
    image = models.ImageField(blank=True, null=True, upload_to='tip/')

    def __str__(self):
        return self.title 


class FeaturedCourse(models.Model):
    name = models.CharField(max_length=255,)
    body = models.TextField()
    link = models.URLField(max_length=500, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='course/' )

    def __str__(self):
        return self.name
    
class Article(models.Model):
    name = models.CharField(max_length=255)
    body = models.TextField()
    link = models.URLField(max_length=500, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='article/')

    def __str__(self):
        return self.name