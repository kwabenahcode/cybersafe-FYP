from django.db import models
from django.contrib.auth.models import AbstractUser
from users.managers import CustomUserManager

# Create your models here.
"""Models for user creation"""
class User(AbstractUser):
    email_address = models.EmailField(
        verbose_name='email', max_length=200, unique=True)
    

    USERNAME_FIELD = 'email_address'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return self.email_address