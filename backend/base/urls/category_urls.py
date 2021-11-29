from django.urls import path

from ..views import category_views

urlpatterns = [


    path('', category_views.getCategories, name='category-list'),

    path('<str:pk>/', category_views.getCategoryPosts, name='category-post-list'),

    path('<str:pk>/remove/',
         category_views.deleteCategory, name="category-remove"),


    path('create/', category_views.createCategory, name='category-create'),


    path('<str:pk>/update/',
         category_views.updateCategory, name='category-update'),


]
