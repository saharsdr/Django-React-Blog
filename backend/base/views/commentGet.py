from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from ..models import Comment
from ..serializers import CommentSerializer


# Get List of Comments of one post
@api_view(['GET'])
def getComments(request, pk):
    comments = Comment.objects.all().filter(post=pk)
    serailizer = CommentSerializer(comments, many=True)
    return Response(serailizer.data)
