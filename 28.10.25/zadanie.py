przedmioty = []

with open('C:\\Users\\uczen\\Documents\\arek_4CT\\28.10.25\\dane.txt', 'r', encoding='utf-8') as file:
    for linia in file:
        dane = linia.split()
        przedmioty.append((dane[0], int(dane[1]), int(dane[2])))

print(f"\nWczytano {len(przedmioty)} rzeczy")

max_waga = int(input("Max waga: "))

n = len(przedmioty)
tab = [[0] * (max_waga + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
    nazwa, wartosc, waga = przedmioty[i-1]
    for w in range(max_waga + 1):
        tab[i][w] = tab[i-1][w]
        if waga <= w:
            tab[i][w] = max(tab[i][w], tab[i-1][w-waga] + wartosc)

wybrane = []
w = max_waga
for i in range(n, 0, -1):
    if tab[i][w] != tab[i-1][w]:
        wybrane.append(przedmioty[i-1])
        w -= przedmioty[i-1][2]

print("\nDo spakowania:")
suma_w = suma_v = 0
for nazwa, wartosc, waga in wybrane:
    print(f"{nazwa} {wartosc} {waga}kg")
    suma_w += waga
    suma_v += wartosc

print(f"\nWaga: {suma_w}kg")
print(f"Wartosc: {suma_v}")