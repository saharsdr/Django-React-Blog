from base.models import Post, Comment, Category
import random

from django.core.management.base import BaseCommand
from faker import Faker
from base.models import Post, Comment, Category


class Command(BaseCommand):
    help = "Command information"

    def handle(self, *args, **kwargs):

        fake = Faker('fa_IR')
        for _ in range(5):
            Post.objects.create(
                title=fake.title(),
                author=fake.name(),
                content=fake.paragraph(nb_sentences=10),
                descriprion=fake.paragraph(nb_sentences=2),
                user=1)
