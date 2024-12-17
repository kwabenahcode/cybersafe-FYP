from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

@api_view(['GET'])
def TipsView(request):
    tips = Tip.objects.all()
    serializer = TipsSerializer(tips, many=True)
    return Response(
        {"status": "Success", "details":serializer.data,}
        )

@api_view(['GET'])
def FeaturedCourseView(request):
    courses = FeaturedCourse.objects.all()
    serializer = FeaturedCourseSerializer(courses, many=True)
    return Response({"status": "Success", "details":serializer.data})

@api_view(['GET'])
def ArticleView(request):
    articles = Article.objects.all()
    serializer = ArticlesSerializer(articles, many=True)
    return Response({
        "status":"Success",
        "details": serializer.data
    })







































