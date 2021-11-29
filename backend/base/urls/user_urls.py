from django.urls import path, include
from rest_framework import views

from ..views import user_views, views

urlpatterns = [
    path('/', user_views.getUsers, name='users-list'),

    path('/profile/', user_views.getUserProfile, name='users-profile'),

    path('/<str:pk>/', user_views.getUser, name='user-detail'),

    path('/login/', views.MyTokenObtainPairView.as_view(), name='user-login'),

    path('-register/', user_views.registerUser, name="user-register")
]
