from django.db.models.signals import pre_save
from django.contrib.auth.models import User
from .models import Comment, Post


def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email


pre_save.connect(updateUser, sender=User)


def updateComment(sender, instance, **kwargs):
    comment = instance
    if comment.author != None:
        comment.name = comment.author.username


pre_save.connect(updateComment, sender=Comment)


def updatePost(sender, instance, **kwargs):
    post = instance
    if post.user != None:
        post.author = post.user.username


pre_save.connect(updatePost, sender=Post)
