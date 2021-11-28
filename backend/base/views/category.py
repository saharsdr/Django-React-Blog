from django.shortcuts import render, get_object_or_404
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models import Category
from ..serailizers import CategorySerializer


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
