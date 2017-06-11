from django.contrib import admin

from tutor.models import Major, University, Tutor

@admin.register(Major, University, Tutor)
class TutorAdmin(admin.ModelAdmin):
    pass
