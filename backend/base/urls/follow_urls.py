from django.urls import path, include
from rest_framework import views

from ..views import follow_views

urlpatterns = [
    path('-following/', follow_views.getUserFollowing, name='users-following'),

    path('-following/<str:pk>/', follow_views.getUserThisFollowing,
         name='users-this-following'),

    path('-follower/', follow_views.getUserFollower, name='users-follower'),

    path('-following/<str:pk>/delete/',
         follow_views.deleteUserFollowing, name='users-delete-following'),

    path('-following/<str:pk>/create/',
         follow_views.createUserFollowing, name='users-create-following')

]
