from django.db import models

# Create your models here.
class Note(models.Model):
    title = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title