from django.urls import path
from ..views import comment


urlpatterns = [

    path('<str:pk>/',
         comment.getComment, name="comment-detail"),


    path('<str:pk>/remove/',
         comment.deleteComment, name="comment-remove"),

    path('<str:pk>/update/', comment.updateComment, name='comment-update'),

    # path('api-auth/', include('rest_framework.urls')),

]
