from django.conf.urls import url
from api import views


urlpatterns = [
    url(r'^viajes/$', views.viaje_list),
    url(r'^viajes/(?P<pk>[0-9]+)/$', views.viaje_detail),
    url(r'^users/$', views.profile_list),
    url(r'^suscribe/(?P<pk>[0-9]+)/$', views.suscribe_to_trip),
    url(r'^suscriptions/(?P<pk>[0-9]+)/$', views.user_trips),
]
