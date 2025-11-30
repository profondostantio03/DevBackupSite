package Java.IIProva2024.quesito2;

public class TesterMonetaOrdinabile{
    public static void main(String[] args) {
        MonetaOrdinabile mo1 = new MonetaOrdinabile(15, "Fagioli");
        System.out.println(mo1);
        System.out.println(mo1.getValoreClassificazione());

        int[] a = new int[5];
        MonetaOrdinabile[] mo1array = new MonetaOrdinabile[5];
        mo1array[0] = new MonetaOrdinabile(10, "Fagioli");
        mo1array[1] = new MonetaOrdinabile(21, "Fagioli");
        mo1array[2] = new MonetaOrdinabile(5, "Fagioli");

        // mo1array.ordina(); //capire perche' questo non funziona
    }
}