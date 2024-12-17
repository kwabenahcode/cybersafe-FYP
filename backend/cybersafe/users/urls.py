from django.urls import path
from . import views

app_label = "users"

urlpatterns=[
    path('user/login/', views.SignInAPI.as_view()),
    path('user/register/', views.RegistrationAPI.as_view()),
]