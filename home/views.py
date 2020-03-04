from django.shortcuts import render
from django.http import Http404
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site

from .models import Image, Worker


def home(request):
    try:
        images = Image.objects.all()
    except Image.DoesNotExist:
        return Http404('Image doesnt exist')

    try:
        workers = Worker.objects.all()
    except Worker.DoesNotExist:
        return Http404('Worker doesnt exist')

    host = str(get_current_site(request))
    url_media = 'http://' + host + settings.MEDIA_URL
    context = {
        'MEDIA_URL': url_media,
        'gallery': images,
        'workers': workers,
    }
    return render(request, 'home.html', context)
