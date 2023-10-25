from django.http.response import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Note
from .serializers import NoteSerializer


class NoteView(APIView):
    def get_note(self, pk):
        try:
            return Note.objects.get(note_id=pk)
        except:
            raise Http404

    def get(self, request, pk=None):
        data = self.get_note(pk) if pk else Note.objects.all().order_by("adding_data")
        serializer = NoteSerializer(data) if pk else NoteSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = NoteSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        note_to_update = self.get_note(pk)
        serializer = NoteSerializer(instance=note_to_update, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        note_to_delete = self.get_note(pk)
        note_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

