from django.contrib import admin
from .models import Category, Comment, Follow, Post
# Register your models here.

admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Follow)
# admin.site.register(Like)
admin.site.register(Comment)
