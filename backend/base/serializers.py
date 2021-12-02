from django.db import models
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Post, Category, Comment


class PostSerializer(serializers.ModelSerializer):
    date = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = ("_id",
                  "date",
                  "title",
                  "author",
                  "content",
                  "thumbnail_pic",
                  "descriprion",
                  "user",
                  "like")

    def get_date(self, obj):
        return obj.createdAt.strftime("%x")


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'author', 'content', 'descriprion')


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('like',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CategoryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)


class CommentSerializer(serializers.ModelSerializer):
    date = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Comment
        fields = ("_id",
                  "date",
                  "name",
                  "content",
                  "author")

    def get_date(self, obj):
        return obj.createdAt.strftime("%x")


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('author', 'name', 'post', 'content')


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'
#         # fields = ("username", "first_name", "last_name", 'id', 'email')


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name",
                  'id', '_id', 'email', 'name', 'isAdmin')

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '' or name == None:
            name = obj.email
        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", 'id',
                  '_id', 'email', 'name', 'isAdmin', 'token')

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
