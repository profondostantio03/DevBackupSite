package Java.IIProva2024.quesito4;

import java.io.Serializable;
import java.util.ArrayList;
import Java.IIProva2024.quesito2.*;
import Java.IIProva2024.quesito3.*;

public class Borsa implements Serializable{
    private ArrayList<MonetaOrdinabile> contenuto;
    private int capacitaMassima;

    public Borsa(int capacitaMassima){
        this.capacitaMassima = capacitaMassima;
        this.contenuto = new ArrayList<>();
    }

    public void aggiungi(MonetaOrdinabile m) throws BorsaPienaException{
        if(contenuto.size() >= capacitaMassima){
            throw new BorsaPienaException("La borsa e' piena!");
        }
        contenuto.add(m);
    }

    public void rimuovi(double valore){
        MonetaOrdinabile daRimuovere = null;

        for(MonetaOrdinabile m:contenuto){
            if(m.getValore() == valore){
                daRimuovere = m;
                break;
            }
        }

        if(daRimuovere == null){
            throw new MonetaNonPresenteException("Nessuna moneta da " + valore + " trovata.");
        }
        contenuto.remove(daRimuovere);
    }

    public MonetaOrdinabile[] getMoneteComeArray(){
        return contenuto.toArray(new MonetaOrdinabile[0]);
    }
}
