print("ARKUSZ inf_04_2025_01_02_SG - 26.11.2025")
#------------------------------------------------
class Urzadzenie:
    def komunikat(self,tresc: str)->None:
        print(tresc)

class Pralka(Urzadzenie):
    def __init__(self):
        self.__numer_programu: int

    def ustaw_program(self,numer)->int:
        if isinstance(numer,int) and 1 <= numer <= 12:
            self.__numer_programu = numer
            print(f"Prorgam został ustawiony: {self.__numer_programu} ")
        else:
            self.__numer_programu = 0
            print(f"Podano nieprawiodłowy numer programu {self.__numer_programu}")
        return self.__numer_programu

class Odkurzacz(Urzadzenie):
    def __init__(self):
        self.__stan: bool = False

    def on(self)->None:
        if not self.__stan:
            self.__stan = True
            self.komunikat("Odkurzacz włączono")

    def off(self)->None:
        if self.__stan:
            self.__stan = False
            self.komunikat("Odkurzacz wyłączono")

def main():
    pralka = Pralka()
    odkurzacz = Odkurzacz()

    print("Podaj numer prania 1..12")
    wejscie = input("Wpisz nr programu prania: ").strip()

    try:
        numer = int(wejscie)
    except ValueError:
        numer = wejscie

    wynik = pralka.ustaw_program(numer)
    print(f"Zwrócony numer programu: {wynik}\n")

    odkurzacz.on()
    odkurzacz.on()
    odkurzacz.on()

    odkurzacz.komunikat("Odkurzacz wyładował się")
    odkurzacz.off()

    if __name__ == "__main__":
        main()