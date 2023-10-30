from szis.models import Zapros, Phone, Division
from django.contrib.auth.models import User
from rest_framework import serializers



class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
        fields = ['type'] #'id', 'otdel', 


class UserPhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']


class UserOnlyPhoneSerializer(serializers.ModelSerializer):
    section = DivisionSerializer(many=True)
    class Meta:
        model = Phone
        fields = ['phone', 'type', 'section'] #'otdel_id', 


class PhoneSerializer(serializers.HyperlinkedModelSerializer):
    user = UserPhoneSerializer()
    section = DivisionSerializer(many=True)
    class Meta:
        model = Phone
        fields = ['user', 'phone', 'type', 'section'] # 'otdel_id',


class UserSerializer(
        serializers.HyperlinkedModelSerializer, 
        serializers.ModelSerializer
    ):
    phones = UserOnlyPhoneSerializer(many=True)
    #serializers.StringRelatedField(many=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'phones']


class ZaprosSerializer(serializers.HyperlinkedModelSerializer):
    user = UserPhoneSerializer()
    # serializers.StringRelatedField(many=True)
    class Meta:
        model = Zapros
        fields = ['id', 'company_id', 'status', 'username', 'operator', 'datetime', 'address', 'user', 'message', 'radius', 'longitude', 'latitude'] 
        #'__all__' user many=True

