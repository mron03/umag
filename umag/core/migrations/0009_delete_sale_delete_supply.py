# Generated by Django 4.1.4 on 2023-04-15 16:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_sale_supply'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Sale',
        ),
        migrations.DeleteModel(
            name='Supply',
        ),
    ]