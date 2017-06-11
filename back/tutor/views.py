from rest_framework.generics import ListAPIView

from tutor.models import University, Major, Tutor

from tutor.serializers import UniversitySerializer, MajorSerializer, TutorSerializer


class UniversityListAPIView(ListAPIView):
    serializer_class = UniversitySerializer
    queryset = University.objects.all()


class MajorListAPIView(ListAPIView):
    serializer_class = MajorSerializer
    queryset = Major.objects.all()


class TutorListAPIView(ListAPIView):
    serializer_class = TutorSerializer
    queryset = Tutor.objects.all()
