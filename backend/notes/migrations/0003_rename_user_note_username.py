# Generated by Django 4.1 on 2023-10-24 13:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0002_rename_noteid_note_note_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='user',
            new_name='username',
        ),
    ]