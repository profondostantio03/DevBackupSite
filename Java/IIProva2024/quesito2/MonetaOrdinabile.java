package Java.IIProva2024.quesito2;

import Java.IIProva2024.allegati.*;
import Java.IIProva2024.quesito1.Classificabile;

public class MonetaOrdinabile extends Moneta implements Classificabile{
    public MonetaOrdinabile(double valore, String ente){
        super(valore, ente);
    }

    public int getValoreClassificazione(){
        return (int)(getValore()*100);
    }

    public String getDescrizioneClassificazione(){
        return getEnte();
    }
}
