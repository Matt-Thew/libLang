from django.conf.urls import url,include
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles.urlpatterns

from . import views
urlpatterns = [
    url(r'^course/', include('course.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$',views.hello_world),
]
