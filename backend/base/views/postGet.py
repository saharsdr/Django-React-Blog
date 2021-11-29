from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from ..models import Post, Category


from ..serializers import CategorySerializer, PostSerializer, LikeSerializer


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


# Get List of Posts
@api_view(['GET'])
def getPosts(request):
    posts = Post.objects.all()
    serailizer = PostSerializer(posts, many=True)
    return Response(serailizer.data)


# Get detail of a post
@api_view(['GET'])
def getPost(request, pk):
    post = get_object_or_404(Post, _id=pk)
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)


# Get Categories of a post
@api_view(['GET'])
def getPostCategories(request, pk):
    category = Category.objects.all().filter(post=pk)
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)


# Get Likes of a post
@api_view(['GET'])
def getLikes(request, pk):
    likes = Post.objects.all().filter(_id=pk)
    serializer = LikeSerializer(likes, many=True)
    return Response({'likes': len(serializer.data[0]['like'])})
