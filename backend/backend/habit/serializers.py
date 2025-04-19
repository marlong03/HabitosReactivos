# serializers.py
from rest_framework import serializers
from .models import Estilo, TipoHabito, Frecuencia, Habito, Dia, DiaHabito
from django.contrib.auth.models import User


# Serializador de Estilo
class EstiloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estilo
        fields = ['id', 'icono', 'color']


# Serializador de TipoHabito
class TipoHabitoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoHabito
        fields = ['id', 'nombre']


# Serializador de Frecuencia
class FrecuenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frecuencia
        fields = ['id', 'nombre']


# Serializador de Habito
class HabitoSerializer(serializers.ModelSerializer):
    tipo_habito = TipoHabitoSerializer()
    estilo = EstiloSerializer()
    frecuencia = FrecuenciaSerializer()
    usuario = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Habito
        fields = ['id', 'nombre', 'tipo_habito', 'repeticion_por_semana', 'estilo', 'frecuencia', 'usuario', 'fecha_creacion']


# Serializador de Dia
class DiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dia
        fields = ['id', 'tipo', 'nombre', 'fecha']


# Serializador de DiaHabito
class DiaHabitoSerializer(serializers.ModelSerializer):
    dia = DiaSerializer()
    habito = HabitoSerializer()

    class Meta:
        model = DiaHabito
        fields = ['id', 'dia', 'habito', 'estado']
