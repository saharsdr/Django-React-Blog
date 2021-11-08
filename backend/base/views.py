from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .posts import posts
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
    return Response(posts)


@api_view(['GET'])
def getPost(request, pk):
    post = None
    for i in posts:
        if i['id'] == pk:
            post = i
            break
    return Response(post)
