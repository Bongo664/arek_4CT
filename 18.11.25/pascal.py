# Funkcja generująca trójkąt Pascala
def trojkat_pascala(n):
    trojkat = []  # Lista do przechowywania wszystkich wierszy
    for i in range(n):
        wiersz = [1]  # Każdy wiersz zaczyna się od 1
        if i > 0:
            # Obliczanie środkowych elementów wiersza
            # Każdy element = suma dwóch elementów z wiersza powyżej
            for j in range(1, i):
                wiersz.append(trojkat[i-1][j-1] + trojkat[i-1][j])
            wiersz.append(1)  # Każdy wiersz kończy się na 1
        trojkat.append(wiersz)  # Dodanie wiersza do trójkąta
    return trojkat

# Funkcja wyświetlająca trójkąt Pascala
def drukuj_trojkat(trojkat):
    n = len(trojkat)
    # Obliczenie maksymalnej szerokości dla ośrodkowania
    max_szerokosc = len("   ".join(map(str, trojkat[-1])))

    # Iteracja po każdym wierszu i wyśrodkowanie go
    for wiersz in trojkat:
        tekst = ' '.join(map(str, wiersz))
        print(tekst.center(max_szerokosc))

# Funkcja sprawdzająca czy liczba jest pierwsza
def czy_pierwsza(liczba):
    if liczba < 2:
        return False
    for i in range(2, liczba):
        if liczba % i == 0:
            return False
    return True

# Funkcja wypisująca liczby pierwsze z wiersza
def wypisz_pierwsze(wiersz):
    pierwsze = []
    for liczba in wiersz:
        if czy_pierwsza(liczba):
            pierwsze.append(liczba)
    return pierwsze

# Program główny
n = int(input("Podaj liczbę wierszy trójkąta Pascala (n): "))
trojkat = trojkat_pascala(n)  # Generowanie trójkąta
print(f"\nTrójkąt Pascala o {n} wierszach:")
drukuj_trojkat(trojkat)  # Wydrukowanie trójkąta

# Wyświetlanie sumy ostatniego wiersza (wiersz numer n-1)
suma_wiersza = sum(trojkat[n-1])
print(f"\nWiersz {n}: {trojkat[n-1]}")
print(f"Suma wiersza {n}: {suma_wiersza}")

# Wzór skróconego mnożenia dla (a+b)^n gdzie b=n
wyrazy = []
for wspol in trojkat[n-1]:
    wyrazy.append(str(wspol))
print(f"\n(a+{n})^{n} = {' + '.join(wyrazy)}")

# Liczby pierwsze w wierszu n
pierwsze = wypisz_pierwsze(trojkat[n-1])
print(f"\nLiczby pierwsze w wierszu {n}: {pierwsze}")