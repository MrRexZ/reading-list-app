from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Book
from .serializer import BookSerializer


# Create your views here.
@api_view(['GET'])
def get_saved_books(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def save_book(request):
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# TODO: Return failure response on failed delete
@api_view(['DELETE'])
def delete_saved_book(request):
    to_delete_book_title = request.data['title']
    to_delete_book_author = request.data['author']
    try:
        to_delete_book = Book.objects.filter(author=to_delete_book_author).filter(title=to_delete_book_title).get()
        to_delete_book.delete()
        return Response()
    except Exception:
        return Response(status=500)



