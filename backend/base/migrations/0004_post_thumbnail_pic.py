# Generated by Django 3.2.9 on 2021-11-09 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_auto_20211109_1110'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='thumbnail_pic',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]