# views.py
from rest_framework import viewsets
from .models import Estilo, TipoHabito, Frecuencia, Habito, Dia, DiaHabito
from .serializers import EstiloSerializer, TipoHabitoSerializer, FrecuenciaSerializer, HabitoSerializer, DiaSerializer, DiaHabitoSerializer
from rest_framework.permissions import IsAuthenticated


# ViewSet para Estilo
class EstiloViewSet(viewsets.ModelViewSet):
    queryset = Estilo.objects.all()
    serializer_class = EstiloSerializer
    permission_classes = [IsAuthenticated]


# ViewSet para TipoHabito
class TipoHabitoViewSet(viewsets.ModelViewSet):
    queryset = TipoHabito.objects.all()
    serializer_class = TipoHabitoSerializer
    permission_classes = [IsAuthenticated]


# ViewSet para Frecuencia
class FrecuenciaViewSet(viewsets.ModelViewSet):
    queryset = Frecuencia.objects.all()
    serializer_class = FrecuenciaSerializer
    permission_classes = [IsAuthenticated]


class HabitoViewSet(viewsets.ModelViewSet):
    queryset = Habito.objects.none()  # vacío, para evitar mostrar todos
    serializer_class = HabitoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Habito.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

# ViewSet para Dia
class DiaViewSet(viewsets.ModelViewSet):
    queryset = Dia.objects.all()
    serializer_class = DiaSerializer
    permission_classes = [IsAuthenticated]


# ViewSet para DiaHabito
class DiaHabitoViewSet(viewsets.ModelViewSet):
    serializer_class = DiaHabitoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtrar por usuario a través del hábito
        return DiaHabito.objects.filter(habito__usuario=self.request.user)
