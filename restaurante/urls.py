
from django.urls import path, include
from rest_framework import status
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('cms/', include('cms.urls'))
]+ static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
