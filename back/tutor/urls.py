from django.conf.urls import url

from tutor.views import UniversityListAPIView, MajorListAPIView, TutorListAPIView

urlpatterns = [
    url(r'^university/$', UniversityListAPIView.as_view(), name="univ"),
    url(r'^major/$', MajorListAPIView.as_view(), name="major"),
    url(r'^tutor/$', TutorListAPIView.as_view(), name="tutor")
]
