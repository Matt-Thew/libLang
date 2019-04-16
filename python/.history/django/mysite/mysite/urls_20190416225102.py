from django.conf.urls import include
from django.conf.urls import url
from django.contrib import admin


from . import views
urlpatterns = [
    url(r'^course/', include('course.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$',views.hello_world),
]
