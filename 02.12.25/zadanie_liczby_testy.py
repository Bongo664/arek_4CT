import unittest
from zadanie_liczby import przyjmuje_liczbe

class TestLiczby(unittest.TestCase):
    def test_poprawna(self):
        self.assertTrue(przyjmuje_liczbe(2))
        self.assertTrue(przyjmuje_liczbe(4))
        self.assertTrue(przyjmuje_liczbe(100))
        
    def test_nieparzysta(self):
        self.assertFalse(przyjmuje_liczbe(3))
        self.assertFalse(przyjmuje_liczbe(1))
        
    def test_ujemna(self):
        self.assertFalse(przyjmuje_liczbe(-2))
        self.assertFalse(przyjmuje_liczbe(-4))
        
    def test_zero(self):
        self.assertFalse(przyjmuje_liczbe(0))

if __name__ == "__main__":
    unittest.main()
