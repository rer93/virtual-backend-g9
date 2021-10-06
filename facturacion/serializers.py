
from rest_framework import serializers
from cms.models import PedidoModel
from facturacion.models import ComprobanteModel


class ComprobanteSerializer(serializers.Serializer):
    pedidoId = serializers.IntegerField()
    tipoComprobante = serializers.ChoiceField(choices=['BOLETA', 'FACTURA'])
    numeroDocumento = serializers.CharField(min_length=8, max_length=11)

    def validate(self, data):
        '''Se llamara automaticamente cuando sellame al metodo is_valid() en el controlador'''

        # recibe la data que esta enviando el usuario y ademas  de hacer la validacion de tipos , logitudes minimas, maximas y otras validaciones se pueden hacer las propias validaciones se pueden hacer las propias validaciones u si todo esta confrorme entonces retonarmos  la data proveida caso contrario

        try:
            data['pedidoId'] = PedidoModel.objects.filter(
                pedidoId = data.get('pedidoId')).first()

            if data.get('pedidoId') is None:
                raise Exception

            return data 
        except:
            raise serializers.ValidationError(detail='Error en el pedido')

class ComprobanteModelSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = ComprobanteModel