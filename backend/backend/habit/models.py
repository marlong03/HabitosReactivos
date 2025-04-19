from django.db import models
from django.contrib.auth.models import User
# Modelo de Estilo
class Estilo(models.Model):
    icono = models.CharField(max_length=100)
    color = models.CharField(max_length=7)  # Para el código de color HEX

    def __str__(self):
        return self.icono


# Modelo de TipoHabito
class TipoHabito(models.Model):
    nombre = models.CharField(max_length=50, choices=[('bueno', 'Bueno'), ('malo', 'Malo')])

    def __str__(self):
        return self.nombre


# Modelo de Frecuencia
class Frecuencia(models.Model):
    nombre = models.CharField(max_length=50, choices=[('cualquier_momento', 'Cualquier momento'), 
                                                      ('mañana', 'Mañana'), 
                                                      ('tarde', 'Tarde'), 
                                                      ('noche', 'Noche')])

    def __str__(self):
        return self.nombre


# Modelo de Habito
class Habito(models.Model):
    nombre = models.CharField(max_length=100)
    tipo_habito = models.ForeignKey(TipoHabito, on_delete=models.CASCADE)
    repeticion_por_semana = models.IntegerField(default=0)  # Cuántas veces a la semana
    estilo = models.ForeignKey(Estilo, on_delete=models.CASCADE)
    frecuencia = models.ForeignKey(Frecuencia, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre


# Modelo de Dia
class Dia(models.Model):
    # Usamos un campo 'tipo' para saber si es un día de la semana o una fecha específica
    TIPO_CHOICES = [
        ('semana', 'Día de la Semana'),
        ('fecha', 'Fecha Específica'),
    ]
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    nombre = models.CharField(max_length=10, blank=True, null=True)  # Lunes, Martes, etc.
    fecha = models.DateField(blank=True, null=True)  # Usado solo cuando el tipo es 'fecha'

    def __str__(self):
        if self.tipo == 'semana':
            return self.nombre
        elif self.tipo == 'fecha':
            return str(self.fecha)



# Modelo de DiaHabito
class DiaHabito(models.Model):
    dia = models.ForeignKey(Dia, on_delete=models.CASCADE)
    habito = models.ForeignKey(Habito, on_delete=models.CASCADE)
    estado = models.BooleanField(default=False)  # Si se completó o no

    def __str__(self):
        return f"Estado del hábito {self.habito.nombre} en {self.dia.fecha}"
