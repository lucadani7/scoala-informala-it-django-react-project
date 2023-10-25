from django.contrib.auth.models import User
from django.db import models


class Note(models.Model):
    objects = None
    note_id = models.AutoField(primary_key=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(default='example@example.com')
    password = models.CharField(max_length=128, default='default_password')
    adding_data = models.DateTimeField(auto_now_add=True)
    text = models.TextField()

    def __str__(self):
        return self.text
