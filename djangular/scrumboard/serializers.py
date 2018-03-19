from rest_framework import serializers
from .models import List, Card

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = List

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Card