from django.db.models import manager
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status

from ..models import User, Post
from ..serializers import UserSerializer, UserSerializerWithToken, PostSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email alreade exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


# Get List of Users
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serailizer = UserSerializer(users, many=True)
    return Response(serailizer.data)


# Get Detail of a user
@api_view(['GET'])
def getUser(request, pk):
    try:
        user = User.objects.get(id=pk)
    except User.DoesNotExist:
        return Response({'status': '404'})
    # user = User.objects.all().filter(id=pk)
    serailizer = UserSerializer(user, many=False)
    return Response(serailizer.data)


@api_view(['GET'])
def getUserPosts(request, pk):
    try:
        posts = Post.objects.all().filter(user=pk)
    except Post.DoesNotExist:
        return Response({'status': '404'})

    serailizer = PostSerializer(posts, many=True)
    return Response(serailizer.data)


# Delete a User
@api_view(['GET'])
def deleteUser(request, pk):
    try:
        item = User.objects.get(id=pk)
    except User.DoesNotExist:
        return Response({'status': '404'})
    item.delete()
    return Response({'status': '200'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user

    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
