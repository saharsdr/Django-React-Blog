from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

from ..serailizers import CategoryCreateSerializer, CommentCreateSerializer, PostCreateSerializer, PostSerializer, UserUpdateSerializer

from ..models import Post, Category, Comment


@api_view(['POST'])
def createPost(request):
    serializer = PostCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def createCategory(request):
    serializer = CategoryCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def createPostComment(request, pk):
    serializer = CommentCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def createPostCategory(request, post_pk, category_pk):
    try:
        post = Post.objects.get(_id=post_pk)
        category = Category.objects.get(_id=category_pk)
    except Category.DoesNotExist or Post.DoesNotExist:
        return Response({'status': '404'})

    post.category.add(category)
    return Response({'status': '200'})


@api_view(['GET'])
def createPostLike(request, post_pk, user_pk):
    try:
        post = Post.objects.get(_id=post_pk)
        user = User.objects.get(id=user_pk)
    except User.DoesNotExist or Post.DoesNotExist:
        return Response({'status': '404'})
    post.like.add(user)
    return Response({'status': '200'})


# Update
@api_view(['POST'])
def updatePost(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostCreateSerializer(instance=post, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def updateComment(request, pk):
    comment = Comment.objects.get(_id=pk)
    serializer = CommentCreateSerializer(instance=comment, data=request.data)
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


# @api_view(['POST'])
# def updateUser(request, pk):
#     user = User.objects.get(id=pk)
#     serializer = UserUpdateSerializer(instance=user, data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)
