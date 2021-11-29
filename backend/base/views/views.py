from typing import Mapping
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from ..serializers import UserSerializer, UserSerializerWithToken

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/posts/',
        '/api/posts/<id>/',
        '/api/posts/<id>/comments/',
        '/api/posts/<id>/categories/',
        '/api/posts/<id>/comments/create/',
        '/api/posts/create/',
        '/api/posts/<id>/edit/',
        '/api/posts/<id>/remove/',
        '/api/users/',
        '/api/users/<id>/',
        '/api/users/<id>/following/',
    ]
    return Response(routes)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user

    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
