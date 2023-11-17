from rest_framework import serializers
from szis.models import Zapros, Phone, Division, Position, UserProfile, Handbook
from django.contrib.auth.models import User, Group



class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
        fields = ['type'] #'id', 'otdel', 


class GroupSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Group
        fields = ['name']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['avatar'] #'user' 


class UserPhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']


class HandbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Handbook
        fields = ['id', 'rank', 'user', 'photo', 'name', 'phone', 'subdivision', 'location', 'status']


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = ['name']


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
    position = PositionSerializer(many=True)
    photo = UserProfileSerializer()
    # serializer = serializers.StringRelatedField() #
    position = serializers.StringRelatedField(many=True)
    groups = GroupSerializer(many=True)

    class Meta:
        model = User
        fields = [
            'id', 'photo', 'username', 'first_name', 'last_name', 
            'email', 'phones', 'position', 'groups', 
            'is_superuser', 'is_staff', 'is_active'
        ]


class ZaprosSerializer(serializers.HyperlinkedModelSerializer):
    user = UserPhoneSerializer()
    # serializers.StringRelatedField(many=True)
    class Meta:
        model = Zapros
        fields = [
            'id', 'company_id', 'status', 'username', 'operator', 
            'datetime', 'address', 'user', 'message', 'radius', 
            'longitude', 'latitude'
        ]

