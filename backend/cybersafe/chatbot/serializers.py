from rest_framework import serializers
from .models import *

class TipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tip
        fields = '__all__'


class FeaturedCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeaturedCourse
        fields = '__all__'

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'