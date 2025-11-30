package Java.ExceptionAndUI.defaultbank;

import Java.ExceptionAndUI.exceptions.SaldoNegativoException;

public class TesterBankAccount{
    public static void main(String[] args) throws SaldoNegativoException{
        BankAccount acc1 = new BankAccount(1500, 50);
        System.out.println(acc1);

        acc1.withdraw(10);
        System.out.println(acc1.getBalance());

        acc1.deposit(15);
        System.out.println(acc1);
        
        acc1.setBalance(1500);
        System.out.println("Balance aggiornato: " + acc1.getBalance());
    }
}