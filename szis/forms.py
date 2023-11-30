from django import forms
from szis.models import Handbooks, Rank, Subdivision


class RankForm(forms.ModelForm):
    rank = forms.ModelChoiceField(queryset=Rank.objects.all(), to_field_name="meaning", empty_label="Выберите звание...", label='Звание')
    division = forms.ModelChoiceField(
        queryset=Subdivision.objects.all(), 
        to_field_name="key", 
        empty_label="Выберите подразделение...", 
        label='Подразделение'
    )
    class Meta:
        model = Handbooks
        fields = ['rank', 'division']
        widgets = {
            'rank': forms.Select(),
            'division': forms.Select()
        }