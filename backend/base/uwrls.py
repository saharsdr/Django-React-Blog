from django.urls import path, include

# from .views import postGet, commentGet, user, category, remove, create, views

urlpatterns = [



    # path('users/login/', views.MyTokenObtainPairView.as_view(),
    #      name='token_obtain_pair'),
    # path('users/profile/', views.getUserProfile, name='users-profile'),


    # # Post
    # path('', postGet.getRoutes, name="routes"),
    # path('posts/', postGet.getPosts, name="posts"),
    # path('post/<str:pk>/', postGet.getPost, name="post"),
    # path('post/<str:pk>/categories/',
    #      postGet.getPostCategories, name="post-categories"),


    # path('post/<str:pk>/comments/', commentGet.getComments, name="comments"),
    # path('post/<str:pk>/likes/', postGet.getLikes, name="likes"),


    # path('users/', user.getUsers, name='users'),
    # path('users/<str:pk>/', user.getUser, name='user'),

    # path('categories/', category.getCategories, name='categories'),
    # path('categories/<str:pk>/', category.getCategoryPosts, name='category-posts'),


    # # Remove
    # path('post/<str:pk>/remove/', remove.deletePost, name="post-remove"),
    # path('comment/<str:pk>/remove/',
    #      remove.deleteComment, name="comment-remove"),
    # path('category/<str:pk>/remove/',
    #      remove.deleteCategory, name="category-remove"),
    # path('post/<str:post_pk>/category/<str:category_pk>/remove/',
    #      remove.deletePostCategory, name="post-category-remove"),
    # path('post/<str:post_pk>/like/<str:user_pk>/remove/',
    #      remove.deletePostLike, name="post-like-remove"),
    # path('user/<str:pk>/remove/',
    #      remove.deleteUser, name="user-remove"),


    # # Create
    # path('post-create/', create.createPost, name='post-create'),
    # path('category-create/', create.createCategory, name='category-create'),
    # path('post/<str:pk>/comment-create/',
    #      create.createPostComment, name='comment-create'),
    # path('post/<str:post_pk>/category/<str:category_pk>/create/',
    #      create.createPostCategory, name='post-category-create'),
    # path('post/<str:post_pk>/like/<str:user_pk>/create/',
    #      create.createPostLike, name='post-like-create'),




    # path('post-update/<str:pk>/', create.updatePost, name='post-update'),
    # path('category-update/<str:pk>/',
    #      create.updateCategory, name='category-update'),
    # path('comment-update/<str:pk>/', create.updateComment, name='comment-update'),
    # #     path('user-update/<str:pk>/', create.updateUser, name='user-update'),


    path('api-auth/', include('rest_framework.urls')),

]
