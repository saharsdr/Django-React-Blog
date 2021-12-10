from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser


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
@permission_classes([IsAuthenticated])
def createPost(request):
    serializer = PostCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


# Delete a Post
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def deletePost(request, pk):
    try:
        post = Post.objects.get(_id=pk)
    except Post.DoesNotExist:
        return Response({'status': '404'})
    post.delete()
    return Response({'status': '200'})


# Update
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updatePost(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostCreateSerializer(instance=post, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
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
# @permission_classes([IsAuthenticated])
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
@permission_classes([IsAdminUser])
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
@permission_classes([IsAuthenticated])
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


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def postUserProposed(request):
    obj = request.user.liker.all()[::-1]
    arr = []
    for post in obj[0:30]:
        for category in post.category.all():
            flaq = True
            for item in arr:
                if item['id'] == category._id:
                    item['count'] = item['count']+1
                    flaq = False
                    break
            if flaq:
                arr.append({'id': category._id, 'count': 1})
    newlist = sorted(arr, key=lambda d: d['count'])
    newlist = newlist[::-1]
    most_liked_category = newlist[0:5]
    posts = []
    for item in most_liked_category:
        post_id = getBestPostOfCategory(item['id'])
        if(post_id != -1):
            post = Post.objects.get(_id=post_id['id'])
            flaq = True
            for i in posts:
                if i._id == post_id['id']:
                    flaq = False
                    break
            if flaq:
                posts.append(post)

    serailizer = PostSerializer(posts, many=True)
    return Response(serailizer.data)


def getBestPostOfCategory(category_id):
    category = Category.objects.get(_id=category_id)
    arr = []
    arr = category.post_set.all().order_by('-createdAt')
    arr = arr[0:10]
    posts = []
    for post in arr:
        likes = len(post.like.all())
        posts.append({'id': post._id, 'like': likes})
    newlist = sorted(posts, key=lambda p: p['like'])
    if newlist:
        return newlist[-1]
    else:
        return -1
