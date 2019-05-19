# -*- coding: utf-8 -*-
from django.http import HttpResponse

from django.shortcuts import render

from .models import Course

def course_list(request):
    course = Course.objects.all()
    return render(request,'course/course_list.html',{'courses:course'})