from rest_framework import serializers
from .models import *

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email_address',
        ]

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email_address',
            'password',
        ]
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        # CLEAN ALL VALUES
        email_address = validated_data['email_address'].lower()
        password = validated_data['password']
        # CREATE A NEW  USER
        user = User.objects.create(
            username=email_address,
            email_address=email_address,
        )
        user.set_password(password)
        user.save()
        return user
    
class UserEmailSerializer(serializers.Serializer):
    email_address = serializers.EmailField(max_length=254)
    password = serializers.CharField(max_length=254)

class SignUpEmailSerializer(serializers.Serializer):
    email_address = serializers.EmailField(max_length=254)
    password = serializers.CharField(max_length=254)
    confirm_password = serializers.CharField(max_length=254)
    