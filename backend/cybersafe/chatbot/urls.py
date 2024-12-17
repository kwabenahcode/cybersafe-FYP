from django.urls import path
from .views import *

urlpatterns = [
    path('tips/', TipsView, name='tips'),
    path('courses/', FeaturedCourseView, name='courses'),
    path('articles/', ArticleView, name='article'),
]