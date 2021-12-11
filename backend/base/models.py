from django.db import models
from django.contrib.auth.models import User
from django.db.models.base import Model
# from .models import Like

# Create your models here.


class Category(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=200, null=False, blank=True)
    author = models.CharField(max_length=200, null=False, blank=True)
    content = models.TextField(null=True, blank=True)
    thumbnail_pic = models.ImageField(null=True, blank=True)
    descriprion = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    _id = models.AutoField(primary_key=True, editable=False)
    like = models.ManyToManyField(User, related_name="liker", blank=True)
    category = models.ManyToManyField(
        Category, blank=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, null=False)
    content = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.content


class Follow(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    follower = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="following")
    following = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="followed_by")

    def __str__(self):
        return str(self.follower.username)+"   -follow-   "+str(self.following.username)

# class UserFollowing(models.Model):
#     user = models.ForeignKey(User, related_name='following')
#     following = models.ForeignKey(User, related_name='followed_by')

# user = User.objects.get(...)
# user.following.all() # all users this user is following
# user.followed_by.all() # all users who follow this user
