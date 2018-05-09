from django.conf.urls import url
from api import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    url(r'^viajes/$', views.viaje_list),
    url(r'^viajes/(?P<pk>[0-9]+)/$', views.viaje_detail),
    url(r'^users/$', views.profile_list),
    url(r'^suscribe/(?P<pk>[0-9]+)/$', views.suscribe_to_trip),
    url(r'^suscriptions/(?P<pk>[0-9]+)/$', views.user_trips),
]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html']) # allow us to use '.json' and '.html' at the end of the url
