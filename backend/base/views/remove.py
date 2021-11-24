from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from ..models import Category, Post, Comment
from ..serailizers import CategorySerializer


# Delete a Post
@api_view(['GET'])
def deletePost(request, pk):
    try:
        post = Post.objects.get(_id=pk)
    except Post.DoesNotExist:
        return Response({'status': '404'})
    post.delete()
    return Response({'status': '200'})


# Delete a Comment
@api_view(['GET'])
def deleteComment(request, pk):
    try:
        item = Comment.objects.get(_id=pk)
    except Comment.DoesNotExist:
        return Response({'status': '404'})
    item.delete()
    return Response({'status': '200'})


# Delete a Category
@api_view(['GET'])
def deleteCategory(request, pk):
    try:
        item = Category.objects.get(_id=pk)
    except Category.DoesNotExist:
        return Response({'status': '404'})
    item.delete()
    return Response({'status': '200'})


# Delete a Post - Category
@api_view(['GET'])
def deletePostCategory(request, post_pk, category_pk):
    try:
        post = Post.objects.get(_id=post_pk)
        category = Category.objects.get(_id=category_pk)
    except Category.DoesNotExist or Post.DoesNotExist:
        return Response({'status': '404'})

    post.category.remove(category)
    return Response({'status': '200'})

# Delete a Post - Category


@api_view(['GET'])
def deletePostLike(request, post_pk, user_pk):
    try:
        post = Post.objects.get(_id=post_pk)
        user = User.objects.get(id=user_pk)
    except User.DoesNotExist or Post.DoesNotExist:
        return Response({'status': '404'})
    post.like.remove(user)
    return Response({'status': '200'})


# Delete a User
@api_view(['GET'])
def deleteUser(request, pk):
    try:
        item = User.objects.get(id=pk)
    except User.DoesNotExist:
        return Response({'status': '404'})
    item.delete()
    return Response({'status': '200'})
