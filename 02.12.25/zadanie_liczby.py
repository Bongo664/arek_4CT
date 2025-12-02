def przyjmuje_liczbe(liczba: int) -> bool:
    return liczba > 0 and liczba % 2 == 0

def main():
    liczby = []
    print("Podaj liczby całkowite, wpisz 'stop' aby zakończyć")
    while True:
        wejscie = input("Podaj liczbę: ")
        if wejscie.lower() == 'stop':
            break
            
        liczba = int(wejscie)
        if przyjmuje_liczbe(liczba):
            liczby.append(liczba)
            print("dodano liczbę")
        else:
            print("Liczba nie jest poprawna")
            
    print(f"Ilość przyjętych liczb: {len(liczby)}")
    print(f"Suma wszystkich zapisanych liczb: {sum(liczby)}")

if __name__ == "__main__":
    main()
