# -*- coding: utf-8 -*-
from django.http import HttpResponse
from __future__ import unicode_literals

from django.shortcuts import render

from .models import Course

def course_list(request):
    course = Course.objects.all()
    output = ','.join(course)
    return HttpResponse(output)