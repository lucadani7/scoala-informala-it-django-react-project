# Generated by Django 4.1 on 2023-10-24 13:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='noteId',
            new_name='note_id',
        ),
    ]
