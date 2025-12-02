def przyjmuje_imie(name:str ) -> bool:
    if not name:
        return False
    return name[0].upper() == 'A' and len(name) <= 7

def main():
    imiona = []
    print("Podaj imiona, wpisz 'exit' aby zakończyć")
    while True:
        name = input("Podaj imie: ")
        if name.lower() == 'exit':
            break
        if przyjmuje_imie(name):
            imiona.append(name)
            print("dodano imie")
        else:
            print("Imie nie jest poprawne")
    print(imiona)
if __name__ == "__main__":
    main()