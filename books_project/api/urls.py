from . import views
from django.urls import path

urlpatterns = [
    path('api/books/',views.get_saved_books),
    path('api/books/create/',views.save_book),
    path('api/books/delete/',views.delete_saved_book)
]