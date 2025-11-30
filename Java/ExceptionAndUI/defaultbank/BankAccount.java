package Java.ExceptionAndUI.defaultbank;

import Java.ExceptionAndUI.exceptions.*;

public class BankAccount {
    private int id;
    private double balance;

    public BankAccount(int id){
        this.id = id;
    }

    public BankAccount(int id, double balance) throws SaldoNegativoException{
        if(balance < 0){
            throw new SaldoNegativoException("Saldo negativo non consentito");
        }
        this.id = id;
        this.balance = balance;
    }

    public void deposit(double amount) throws ImportoNegativoException{
       if(amount<0){
            throw new ImportoNegativoException("Importo inserito negativo");
       }
        balance += amount;
    }

    public void withdraw(double amount){
        if(amount > balance){
            throw new FondiInsufficientiException("Impossibile ritirare soldi, fondi insufficienti");
        }
        balance -= amount;
    }

    public double getBalance(){
        return balance;
    }

    public void setBalance(double balance){
        this.balance = balance;
    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String toString(){
        return getClass().getName() + "[ ID Account: " + id + ", balance: " + balance + " ]";
    }
}
