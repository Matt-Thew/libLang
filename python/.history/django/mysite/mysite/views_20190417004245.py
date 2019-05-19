from django.http import HttpResponse


def hello_world(request):
    return render(request,'template/home.html')
