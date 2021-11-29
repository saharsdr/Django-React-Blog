from django.urls import path, include

from ..views import post, comment

urlpatterns = [

    path('posts/', post.getPosts, name="posts"),
    path('post/<str:pk>/', post.getPost, name="post"),
    path('post/<str:pk>/categories/',
         post.getPostCategories, name="post-categories"),


    path('post/<str:pk>/comments/', comment.getComments, name="comments"),
    path('post/<str:pk>/likes/', post.getLikes, name="likes"),


    path('post/<str:pk>/remove/', post.deletePost, name="post-remove"),

    path('post/<str:post_pk>/category/<str:category_pk>/remove/',
         post.deletePostCategory, name="post-category-remove"),
    path('post/<str:post_pk>/like/<str:user_pk>/remove/',
         post.deletePostLike, name="post-like-remove"),



   
    path('post-create/', post.createPost, name='post-create'),
   
    path('post/<str:pk>/comment-create/',
         post.createPostComment, name='comment-create'),
    path('post/<str:post_pk>/category/<str:category_pk>/create/',
         post.createPostCategory, name='post-category-create'),
    path('post/<str:post_pk>/like/<str:user_pk>/create/',
         post.createPostLike, name='post-like-create'),




    path('post-update/<str:pk>/', post.updatePost, name='post-update'),



]
