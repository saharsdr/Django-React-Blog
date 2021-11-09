from django.contrib import admin
from .models import PostCategory, Category, Comment, Follow, Like, Post
# Register your models here.

admin.site.register(Post)
admin.site.register(Category)
admin.site.register(PostCategory)
admin.site.register(Follow)
admin.site.register(Like)
admin.site.register(Comment)
