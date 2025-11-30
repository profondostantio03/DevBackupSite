package Java.IIProva2024.quesito1;

public class Ordinatore {
    public static void ordina(Classificabile[] array){
        int n = array.length;
        for(int i=0; i < n - 1; i++){
            for(int j = 0; j < n-i-1; j++){
                if(scambia(array[j], array[j+1])){
                    Classificabile temp = array[j];
                    array[j] = array[j + 1];
                    array[j+1] = temp;
                }
            }
        }
    }
    public static boolean scambia(Classificabile a, Classificabile b){
        if(a.getValoreClassificazione()>b.getValoreClassificazione()){
            return true;
        }
        if(a.getValoreClassificazione()==b.getValoreClassificazione()){
            if(a.getDescrizioneClassificazione().compareTo(b.getDescrizioneClassificazione())>0){
                return true;
            }
        }
        return false;
    }
}
