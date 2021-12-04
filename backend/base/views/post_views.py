from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response


from ..serializers import CategorySerializer, CommentCreateSerializer, LikeSerializer, PostCreateSerializer, PostSerializer

from ..models import Post, Category


# Get List of Posts
@api_view(['GET'])
def getPosts(request):
    posts = Post.objects.all().order_by('-createdAt')
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
def getPostCategory(request, pk):
    category = Category.objects.all().filter(post=pk)
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createPost(request):
    serializer = PostCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


# Delete a Post
@api_view(['GET'])
def deletePost(request, pk):
    try:
        post = Post.objects.get(_id=pk)
    except Post.DoesNotExist:
        return Response({'status': '404'})
    post.delete()
    return Response({'status': '200'})


# Update
@api_view(['POST'])
def updatePost(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostCreateSerializer(instance=post, data=request.data)
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


@api_view(['POST'])
def createPostComment(request, pk):
    serializer = CommentCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def createPostLike(request, post_pk, user_pk):
    try:
        post = Post.objects.get(_id=post_pk)
        user = User.objects.get(id=user_pk)
    except User.DoesNotExist or Post.DoesNotExist:
        return Response({'status': '404'})
    post.like.add(user)
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

# Delete a Post - Like


@api_view(['GET'])
def deletePostLike(request, post_pk, user_pk):
    try:
        post = Post.objects.get(_id=post_pk)
        user = User.objects.get(id=user_pk)
    except User.DoesNotExist or Post.DoesNotExist:
        return Response({'status': '404'})
    post.like.remove(user)
    return Response({'status': '200'})


# Get Likes of a post
@api_view(['GET'])
def getPostLikes(request, pk):
    likes = Post.objects.all().filter(_id=pk)
    serializer = LikeSerializer(likes, many=True)
    return Response({'likes': len(serializer.data[0]['like'])})
