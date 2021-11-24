from django.urls import path, include

from .views import postGet, commentGet, user, category, remove

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

    path('categories/', category.getCategories, name='categories'),
    path('categories/<str:pk>/', category.getCategoryPosts, name='category-posts'),


    # Remove
    path('post/<str:pk>/remove/', remove.deletePost, name="post-remove"),
    path('comment/<str:pk>/remove/',
         remove.deleteComment, name="comment-remove"),
    path('category/<str:pk>/remove/',
         remove.deleteCategory, name="category-remove"),
    path('post/<str:post_pk>/category/<str:category_pk>/remove/',
         remove.deletePostCategory, name="post-category-remove"),
    path('post/<str:post_pk>/like/<str:user_pk>/remove/',
         remove.deletePostLike, name="post-like-remove"),
    path('user/<str:pk>/remove/',
         remove.deleteUser, name="user-remove"),



    path('api-auth/', include('rest_framework.urls')),

]
