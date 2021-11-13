from django.urls import path, include
from .views import postGet
from .views import commentGet

urlpatterns = [
    # Post
    path('', postGet.getRoutes, name="routes"),
    path('posts/', postGet.getPosts, name="posts"),
    path('post/<str:pk>/', postGet.getPost, name="post"),
    path('post/<str:pk>/categories/',
         postGet.getPostCategories, name="post-categories"),


    path('post/<str:pk>/comments/', commentGet.getComments, name="comments"),
    path('post/<str:pk>/likes/', postGet.getLikes, name="likes"),







    path('api-auth/', include('rest_framework.urls')),

]
