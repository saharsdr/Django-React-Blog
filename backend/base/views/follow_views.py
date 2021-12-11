
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status

from ..models import User, Follow
from ..serializers import UserSerializer


# List of who user is following them
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserFollowing(request):
    user = request.user
    items = user.following.all()
    following = []
    for item in items:
        following.append(item.following)
    serializer = UserSerializer(following, many=True)
    return Response(serializer.data)


# List of whom are follow the user
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserFollower(request):
    user = request.user
    items = user.followed_by.all()
    followers = []
    for item in items:
        followers.append(item.follower)
    serializer = UserSerializer(followers, many=True)
    return Response(serializer.data)


# this user whant to follow another user
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createUserFollowing(request, pk):
    try:
        user = request.user
        user2 = User.objects.get(id=pk)
        arr = user.following.all().filter(following=user2)
        if len(arr) > 0:
            is_exist = True
        else:
            is_exist = False
        if is_exist == False:
            new_following = Follow.objects.create(
                follower=user,
                following=user2
            )
            message = {'detail': 'Done'}
            return Response(message, status=status.HTTP_201_CREATED)
        else:
            message = {'detail': 'Dublicated.'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

    except:
        message = {'detail': 'Request failed.'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


# this user whant to follow another user
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteUserFollowing(request, pk):
    try:
        user = request.user
        user2 = User.objects.get(id=pk)
        arr = user.following.all().filter(following=user2)
        is_exist = isExistFolloing(user, arr)
        if is_exist:
            arr.delete()
            message = {'detail': 'Done'}
            return Response(message, status=status.HTTP_200_OK)
        else:
            message = {'detail': 'Not Found.'}
            return Response(message, status=status.HTTP_404_NOT_FOUND)

    except:
        message = {'detail': 'Request failed.'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def getUserThisFollowing(request, pk):
    try:
        user = request.user
        user2 = User.objects.get(id=pk)
        arr = user.following.all().filter(following=user2)
        is_exist = isExistFolloing(user, arr)
        if is_exist:
            return Response('yes')
        else:
            return Response('no')
    except:
        message = {'detail': 'Request failed.'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


def isExistFolloing(user, following):
    if len(following) > 0:
        is_exist = True
    else:
        is_exist = False
    return is_exist
