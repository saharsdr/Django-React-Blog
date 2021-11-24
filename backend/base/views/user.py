from django.shortcuts import render, get_object_or_404
# from django.http import JsonResponse
# from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework.generics import ListAPIView

from ..models import User
from ..serailizers import UserSerializer


# Get List of Users
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serailizer = UserSerializer(users, many=True)
    return Response(serailizer.data)


# Get Detail of a user
@api_view(['GET'])
def getUser(request, pk):
    user = get_object_or_404(User, id=pk)
    # user = User.objects.all().filter(id=pk)
    serailizer = UserSerializer(user, many=False)
    return Response(serailizer.data)
