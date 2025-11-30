package Java.ExceptionAndUI.bankgui;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import java.awt.event.*;

import Java.ExceptionAndUI.defaultbank.BankAccount;
import Java.ExceptionAndUI.exceptions.*;

public class BankFrameViewer{
    public static void main(String[] args) throws SaldoNegativoException{
        BankAccount acc1;
        try{
            acc1 = new BankAccount(115, 15);
        } catch (SaldoNegativoException sn1){
            JOptionPane.showMessageDialog(null, "Errore creazione conto: " + sn1.getMessage());
            return;
        }
        JFrame mainFrame = new JFrame("Bank GUI");
        mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        mainFrame.setSize(750, 500); 
        mainFrame.setLocationRelativeTo(null);

        JPanel bankPanel = new JPanel();
        final JLabel balanceLabel = new JLabel("Saldo: ");
        final JTextField idField = new JTextField(10);
        final JTextField balanceField = new JTextField(10);
        JButton confirmButton = new JButton("Confirm");
        bankPanel.add(balanceLabel);
        bankPanel.add(idField);
        bankPanel.add(balanceField);
        bankPanel.add(confirmButton);
        mainFrame.add(bankPanel);


        mainFrame.setVisible(true);

        class ButtonListener implements ActionListener{
            public void actionPerformed(ActionEvent e){
                String textBalance = balanceField.getText();
                double balance = Double.parseDouble(textBalance);
                try {
                    acc1.deposit(balance);
                } catch (ImportoNegativoException e1) {
                    e1.printStackTrace();
                    JOptionPane.showMessageDialog(null, "Importo negativo");
                }
                System.out.println(balance);
            }
        }
        ActionListener listener = new ButtonListener();
        confirmButton.addActionListener(listener);
    }
}