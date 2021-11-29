from django.urls import path, include
from rest_framework import views

from ..views import user, views

urlpatterns = [
    path('', user.getUsers, name='users-list'),

    path('profile/', user.getUserProfile, name='users-profile'),

    path('<str:pk>/', user.getUser, name='user-detail'),

    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
