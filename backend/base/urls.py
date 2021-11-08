from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('posts/', views.getPosts, name="posts"),
    path('post/<str:pk>/', views.getPost, name="post"),

]
