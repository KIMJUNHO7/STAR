from django.db import models


class Major(models.Model):

    name = models.CharField('학과명', max_length=100)

    def __str__(self):
        return self.name

class University(models.Model):

    name = models.CharField('대학명', max_length=100)
    majors = models.ManyToManyField(Major)

    def __str__(self):
        return self.name


class Tutor(models.Model):

    name = models.CharField('튜터이름', max_length=100)
    enterance_year = models.CharField('학번', max_length=100)
    university = models.ForeignKey(University)
    major = models.ForeignKey(Major)

    def __str__(self):
        return self.name
