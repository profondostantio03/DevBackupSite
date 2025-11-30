package Java.IIProva2024.allegati;

import java.io.Serializable;

public class Moneta implements Serializable{
    private double valore;
    private String ente;

    public Moneta(double valore, String ente){
        this.valore = valore;
        this.ente = ente;
    }

    public double getValore(){
        return valore;
    }

    public String getEnte(){
        return ente;
    }

    public String toString(){
        return getClass().getName() + "[ Valore: " + valore + ", ente: " + ente +" ]";
    }
}