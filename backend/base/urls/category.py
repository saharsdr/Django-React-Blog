from django.urls import path

from ..views import category

urlpatterns = [


    path('', category.getCategories, name='category-list'),

    path('<str:pk>/', category.getCategoryPosts, name='category-post-list'),

    path('<str:pk>/remove/',
         category.deleteCategory, name="category-remove"),


    path('create/', category.createCategory, name='category-create'),


    path('<str:pk>/update/',
         category.updateCategory, name='category-update'),


]
