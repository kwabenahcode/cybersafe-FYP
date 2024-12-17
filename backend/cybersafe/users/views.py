from django.shortcuts import render
from rest_framework import generics, permissions, status
from .models import *
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
import re


# Create your views here.
class SignInAPI(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserEmailSerializer
    def post(self, request, *args, **kwargs):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            email_address = serializers.data["email_address"]
            password = serializers.data["password"]
            if User.objects.filter(email_address=email_address): 
                user = authenticate(email_address=email_address,password=password)
                if not user:
                    response_data = {'message':'Invalid Credential'}
                    return Response(response_data, status=400)
                refresh = RefreshToken.for_user(user)
                context = {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token)
                }
                return Response(
                    {
                        "status":"success",
                        "detail":"Login Successfully",
                        'refresh':context['refresh'],
                        'access': context['access'],
                        'user': UserLoginSerializer(user).data
                    }
                )
            else:
                return Response(
                    {
                        "status": "error",
                        "detail": "User Not Found",
                    },
                    status=404,
                )
        else:
            return Response(
                {"status": "failure", "detail": serializers.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )
        

class RegistrationAPI(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = SignUpEmailSerializer
    def post(self, request,*args, **kwargs):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            email_address = serializers.data["email_address"]
            password = serializers.data["password"]
            confirm_password = serializers.data["confirm_password"]
            # Validate password
            if len(password) < 4:
                return Response(
                    {"status": "failure", "detail": "Password Must be at least 4 characters"},
                    status=400,
                )
            
             # Validate that password and confirm_password match
            if password != confirm_password:
                return Response(
                    {"status": "failure", 
                     "detail": "Passwords do not match"
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )
        
            # Validate email address format
            if not re.match(r"[^@]+@[^@]+\.[^@]+", email_address):
                return Response(
                    {"status": "failure", 
                     "detail": "Invalid email address format"
                    },
                    status=400,
                )
            
            if User.objects.filter(email_address=email_address):
                return Response(
                    {"status": "failure", 
                     "detail": "Email Already Exist"
                    },
                    status=400,
                )
            user = User.objects.create(
                email_address=email_address,
                username=email_address
            )
            user.set_password(password)
            user.save()
            refresh = RefreshToken.for_user(user)
            context = {
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            }
            return Response(
                {
                    "status":"success",
                    "detail":"registered Successfully",
                    'refresh':context['refresh'],
                    'access': context['access'],
                    'user': UserRegistrationSerializer(user).data
                },
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {"status": "failure", "detail": serializers.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )