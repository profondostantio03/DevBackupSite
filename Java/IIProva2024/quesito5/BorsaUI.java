package Java.IIProva2024.quesito5;

import java.io.File;

import javax.swing.*;
import java.awt.*;
import Java.IIProva2024.quesito4.Borsa;

public class BorsaUI extends JFrame{
    private JTextField txtNumeroMonete;
    private JTextField txtTagliaBorsa;
    private JTextArea areaTesto;
    private Borsa borsaCorrente;

    public BorsaUI(){
        super("Gestione borsa");
        inizializzaGUI();
        gestisciFileAvvio();
    }

    private void gestisciFileAvvio(){
        File file = new File("borsa.dat");
        if(file.exists()){
            boolean rinominato = file.renameTo(new File("old_borsa.dat"));
            if(rinominato) System.out.println("File rinominato in old_borsa.dat");
        }
    }

    private void inizializzaGUI(){
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(600, 400);
        setLayout(new BorderLayout());

        JPanel pannelloInput = new JPanel();
        pannelloInput.add(new Label("Num Monete: "));
        txtNumeroMonete = new JTextField(5);
        pannelloInput.add(txtNumeroMonete);

        pannelloInput.add(new JLabel("Taglia Borsa: "));
        txtTagliaBorsa = new JTextField(5);
        pannelloInput.add(txtTagliaBorsa);

        add(pannelloInput, BorderLayout.NORTH);
    }

    public static void main(String[] args){
        new BorsaUI().setVisible(true);
    }
}
