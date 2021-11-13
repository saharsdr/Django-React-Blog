from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Post, Category, Comment


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('like',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
