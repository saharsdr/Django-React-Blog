from django.urls import path, include
from .views import postGet, commentGet, user

urlpatterns = [
    # Post
    path('', postGet.getRoutes, name="routes"),
    path('posts/', postGet.getPosts, name="posts"),
    path('post/<str:pk>/', postGet.getPost, name="post"),
    path('post/<str:pk>/categories/',
         postGet.getPostCategories, name="post-categories"),


    path('post/<str:pk>/comments/', commentGet.getComments, name="comments"),
    path('post/<str:pk>/likes/', postGet.getLikes, name="likes"),


    path('users/', user.getUsers, name='users'),
    path('users/<str:pk>/', user.getUser, name='user'),





    path('api-auth/', include('rest_framework.urls')),

]
