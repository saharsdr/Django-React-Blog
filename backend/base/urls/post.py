from django.urls import path, include

from ..views import post, comment

urlpatterns = [

    path('', post.getPosts, name="post-list"),


    path('<str:pk>/', post.getPost, name="post-detail"),


    path('<str:pk>/categories/',
         post.getPostCategories, name="post-categories"),


    path('<str:pk>/comments/', comment.getComments, name="comments"),


    path('<str:pk>/likes/', post.getPostLikes, name="post-likes"),


    path('<str:pk>/remove/', post.deletePost, name="post-remove"),


    path('<str:post_pk>/category/<str:category_pk>/remove/',
         post.deletePostCategory, name="post-category-remove"),


    path('<str:post_pk>/like/<str:user_pk>/remove/',
         post.deletePostLike, name="post-like-remove"),


    path('create/', post.createPost, name='post-create'),


    path('<str:pk>/comment-create/',
         post.createPostComment, name='comment-create'),


    path('<str:post_pk>/category/<str:category_pk>/create/',
         post.createPostCategory, name='post-category-create'),


    path('<str:post_pk>/like/<str:user_pk>/create/',
         post.createPostLike, name='post-like-create'),


    path('<str:pk>/update/', post.updatePost, name='post-update'),

]
