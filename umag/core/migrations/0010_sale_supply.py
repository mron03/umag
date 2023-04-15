# Generated by Django 4.1.4 on 2023-04-15 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_delete_sale_delete_supply'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('barcode', models.BigIntegerField()),
                ('quantity', models.IntegerField()),
                ('price', models.IntegerField()),
                ('sale_time', models.DateTimeField()),
            ],
            options={
                'db_table': 'sale',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Supply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('barcode', models.BigIntegerField()),
                ('quantity', models.IntegerField()),
                ('price', models.IntegerField()),
                ('supply_time', models.DateTimeField()),
            ],
            options={
                'db_table': 'supply',
                'managed': False,
            },
        ),
    ]
