from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Post
from .posts import posts

from .serailizers import PostSerializer
# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/posts/',
        '/api/posts/<id>/',
        '/api/posts/<id>/comments/',
        '/api/posts/<id>/comments/create/',
        '/api/posts/create/',
        '/api/posts/<id>/edit/',
        '/api/posts/<id>/remove/',
        '/api/users/',
        '/api/users/<id>/',
        '/api/users/<id>/following/',
    ]
    return Response(routes)


@api_view(['GET'])
def getPosts(request):
    posts = Post.objects.all()
    serailizer = PostSerializer(posts, many=True)
    return Response(serailizer.data)


@api_view(['GET'])
def getPost(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)
