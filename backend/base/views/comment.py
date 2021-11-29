from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from ..models import Comment
from ..serializers import CommentCreateSerializer, CommentSerializer


# Get List of Comments of one post
@api_view(['GET'])
def getComments(request, pk):
    comments = Comment.objects.all().filter(post=pk)
    serailizer = CommentSerializer(comments, many=True)
    return Response(serailizer.data)


# Delete a Comment
@api_view(['GET'])
def deleteComment(request, pk):
    try:
        item = Comment.objects.get(_id=pk)
    except Comment.DoesNotExist:
        return Response({'status': '404'})
    item.delete()
    return Response({'status': '200'})


@api_view(['POST'])
def updateComment(request, pk):
    comment = Comment.objects.get(_id=pk)
    serializer = CommentCreateSerializer(instance=comment, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
