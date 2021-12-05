from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from ..models import Comment
from ..serializers import CommentCreateSerializer, CommentSerializer


# Get List of Comments of one post
@api_view(['GET'])
def getComments(request, pk):
    comments = Comment.objects.all().filter(post=pk).order_by('-createdAt')
    serailizer = CommentSerializer(comments, many=True)
    return Response(serailizer.data)


@api_view(['GET'])
def getComment(request, pk):
    comments = Comment.objects.get(_id=pk)
    serailizer = CommentSerializer(comments, many=False)
    return Response(serailizer.data)


# Delete a Comment
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def deleteComment(request, pk):
    try:
        item = Comment.objects.get(_id=pk)
    except Comment.DoesNotExist:
        return Response({'status': '404'})
    item.delete()
    return Response({'status': '200'})


@api_view(['POST'])
@permission_classes([IsAdminUser])
def updateComment(request, pk):
    comment = Comment.objects.get(_id=pk)
    serializer = CommentCreateSerializer(instance=comment, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
