# Generated by Django 5.1.1 on 2024-12-13 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatbot', '0002_featuredcourse'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('body', models.TextField()),
                ('link', models.URLField(blank=True, max_length=500)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
