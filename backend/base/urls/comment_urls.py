from django.urls import path
from ..views import comment_views


urlpatterns = [

    path('<str:pk>/',
         comment_views.getComment, name="comment-detail"),


    path('<str:pk>/remove/',
         comment_views.deleteComment, name="comment-remove"),

    path('<str:pk>/update/', comment_views.updateComment, name='comment-update'),

    # path('api-auth/', include('rest_framework.urls')),

]
