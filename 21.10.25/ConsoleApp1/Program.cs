using System;

class Program
{
    static void Main()
    {
        Console.Write("n: ");
        int n = int.Parse(Console.ReadLine());

        int[][] t = new int[n][];
        for (int i = 0; i < n; i++)
        {
            t[i] = new int[i + 1];
            t[i][0] = t[i][i] = 1;
            for (int j = 1; j < i; j++)
                t[i][j] = t[i - 1][j - 1] + t[i - 1][j];

            foreach (int x in t[i]) Console.Write(x + " ");
            Console.WriteLine();
        }

        int s = (n - 1) / 2;
        Console.Write($"\nŚrodkowy: ");
        foreach (int x in t[s]) Console.Write(x + " ");
        Console.WriteLine($"\nElement środkowy: {t[s][s / 2]}");

        Console.Write($"(a+b)^{s} = ");
        for (int k = 0; k <= s; k++)
            Console.Write((k > 0 ? "+" : "") + $"{t[s][k]}a^{s - k}b^{k}");

        Console.Write("\na: ");
        double a = double.Parse(Console.ReadLine());
        Console.Write("b: ");
        double b = double.Parse(Console.ReadLine());

        double w = 0;
        for (int k = 0; k <= s; k++)
            w += t[s][k] * Math.Pow(a, s - k) * Math.Pow(b, k);

        Console.WriteLine($"Wynik: {w}");
    }
}