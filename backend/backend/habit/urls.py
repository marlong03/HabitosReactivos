# habit/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    EstiloViewSet,
    TipoHabitoViewSet,
    FrecuenciaViewSet,
    HabitoViewSet,
    DiaViewSet,
    DiaHabitoViewSet
)

router = DefaultRouter()
router.register(r'estilos', EstiloViewSet, basename='estilo')
router.register(r'tipo-habitos', TipoHabitoViewSet, basename='tipohabito')
router.register(r'frecuencias', FrecuenciaViewSet, basename='frecuencia')
router.register(r'habitos', HabitoViewSet, basename='habito')
router.register(r'dias', DiaViewSet, basename='dia')
router.register(r'dia-habitos', DiaHabitoViewSet, basename='diahabito')

urlpatterns = [
    path('', include(router.urls)),
]
