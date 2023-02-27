from . import views
from django.urls import path

urlpatterns = [
    path('',views.get_saved_books),
    path('save/',views.save_book),
]