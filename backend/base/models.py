from django.db import models
from django.contrib.auth.models import User
from django.db.models.base import Model
# from .models import Like

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200, null=False, blank=True)
    author = models.CharField(max_length=200, null=False, blank=True)
    content = models.TextField(null=True, blank=True)
    thumbnail_pic = models.ImageField(null=True, blank=True)
    descriprion = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    like = models.ManyToManyField(User, related_name="liker")

    def __str__(self):
        return self.title


class Category(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=100, null=False)
    post = models.ManyToManyField(
        Post, related_name="post_set", blank=True)

    def __str__(self):
        return self.name


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


# class Like(models.Model):
#     _id = models.AutoField(primary_key=True, editable=False)
#     createdAt = models.DateTimeField(auto_now_add=True)
#     post = models.ForeignKey(Post, on_delete=models.CASCADE)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)

#     def __str__(self):
#         return str(self.post)+" -- "+str(self.user)


class Follow(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    follower = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="follower")
    following = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="following")
