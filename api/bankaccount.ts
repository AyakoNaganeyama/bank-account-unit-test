// app/BankAccount.ts
export const WRONG_AMOUNT = "Cannot deposit or withdraw zero or negative amount!";
export const INSUFFICIENT_BALANCE = "Insufficient balance!";

export class BankAccount {
  accountHolderName: string;
  private balance: number;

  constructor(name: string, initialBalance: number) {
    this.accountHolderName = name;
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  updateHolderName(newName: string) {
    this.accountHolderName = newName;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error(WRONG_AMOUNT);
    this.balance += amount;
  }

  debit(amount: number) {
    if (amount <= 0) throw new Error(WRONG_AMOUNT);
    if (amount > this.balance) throw new Error(INSUFFICIENT_BALANCE);
    this.balance -= amount;
    return amount;
  }
}
