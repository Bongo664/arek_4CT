import unittest
from zadanie import przyjmuje_imie

class MojeTestowanie(unittest.TestCase):
    def test_poprawne_imie(self):
        self.assertTrue(przyjmuje_imie("Adam"))
        self.assertTrue(przyjmuje_imie("ania"))
    
    def test_zla_litera(self):
        self.assertFalse(przyjmuje_imie("Bolek"))
    
    def test_za_dlugie(self):
        self.assertFalse(przyjmuje_imie("Anastazja"))

    def test_puste(self):
        self.assertFalse(przyjmuje_imie(""))

if __name__ == "__main__":
    unittest.main()
