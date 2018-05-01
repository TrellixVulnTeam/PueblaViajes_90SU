from django.test import TestCase
from api.models import Viaje
from datetime import datetime
# Create your tests here.

#Viajes tests
class ViajeTestCase(TestCase):
    def setUp(self):
        start_date = datetime.strptime('04-11-2018', '%d-%m-%Y').date()
        end_date = datetime.strptime('04-11-2018', '%d-%m-%Y').date()

        Viaje.objects.create(title="Test1", description="Testing is interesting", start_date = start_date, end_date = end_date, price = "50.0", contact_number = "1234567890")
        Viaje.objects.create(title="Test2", description="Testing is NOT interesting", start_date = start_date, end_date = end_date, price = "60", contact_number = "123412345")

    def test_viaje_properties(self):
        test1 = Viaje.objects.get(title="Test1")
        test2 = Viaje.objects.get(title="Test2")
        self.assertEqual(test1.description, 'Testing is interesting')
        self.assertEqual(test2.description, 'Testing is NOT interesting')

    def test_viaje_suscriptors(self):
        test1 = Viaje.objects.get(title="Test1")
        test2 = Viaje.objects.get(title="Test2")
        self.assertEqual(test1.description, 'Testing is interesting')
        self.assertEqual(test2.description, 'Testing is NOT interesting')

    def test_viaje_price(self):
        test1 = Viaje.objects.get(title="Test1")
        test2 = Viaje.objects.get(title="Test2")
        self.assertEqual(test1.price, 50.0)
        self.assertEqual(test2.price, 60)
