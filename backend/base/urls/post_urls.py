from django.urls import path, include
# from rest_framework import views

from ..views import post_views, comment_views

urlpatterns = [

    path('/', post_views.getPosts, name="post-list"),


    path('/<str:pk>/', post_views.getPost, name="post-detail"),


    path('/<str:pk>/category/',
         post_views.getPostCategory, name="post-category"),


    path('/<str:pk>/comments/', comment_views.getComments, name="comments"),


    path('/<str:pk>/likes/', post_views.getPostLikes, name="post-likes"),


    path('/<str:pk>/remove/', post_views.deletePost, name="post-remove"),


    path('/<str:post_pk>/category/<str:category_pk>/remove/',
         post_views.deletePostCategory, name="post-category-remove"),


    path('/<str:post_pk>/like/<str:user_pk>/remove/',
         post_views.deletePostLike, name="post-like-remove"),


    path('-create/', post_views.createPost, name='post-create'),


    path('/<str:pk>/comment-create/',
         post_views.createPostComment, name='comment-create'),


    path('/<str:post_pk>/category/<str:category_pk>/create/',
         post_views.createPostCategory, name='post-category-create'),


    path('/<str:post_pk>/like/<str:user_pk>/create/',
         post_views.createPostLike, name='post-like-create'),


    path('/<str:pk>/update/', post_views.updatePost, name='post-update'),

    path('-proposed/', post_views.postUserProposed, name="post-user-proposed"),

]
