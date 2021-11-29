from django.shortcuts import render, get_object_or_404
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models import Category
from ..serializers import CategoryCreateSerializer, CategorySerializer


# Get List of Category
@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serailizer = CategorySerializer(categories, many=True)
    return Response(serailizer.data)


# Get Category Posts
@api_view(['GET'])
def getCategoryPosts(request, pk):
    categories = get_object_or_404(Category, _id=pk)
    serailizer = CategorySerializer(categories, many=False)
    return Response({'posts': serailizer.data})
    # return Response({'posts': serailizer.data['post']})


# Delete a Category
@api_view(['GET'])
def deleteCategory(request, pk):
    try:
        item = Category.objects.get(_id=pk)
    except Category.DoesNotExist:
        return Response({'status': '404'})
    item.delete()
    return Response({'status': '200'})


@api_view(['POST'])
def createCategory(request):
    serializer = CategoryCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def updateCategory(request, pk):
    category = Category.objects.get(_id=pk)
    serializer = CategoryCreateSerializer(instance=category, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
