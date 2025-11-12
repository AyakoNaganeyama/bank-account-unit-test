// app/__tests__/BankAccount.test.ts
import {
  BankAccount,
  INSUFFICIENT_BALANCE,
  WRONG_AMOUNT,
} from "../api/bankaccount";

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount("Ayako", 200);
  });

  test("Deposit valid amount", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(250);
  });

  test("Deposit invalid amount (0)", () => {
    expect(() => account.deposit(0)).toThrow(WRONG_AMOUNT);
  });

  test("Deposit invalid amount (negative)", () => {
    expect(() => account.deposit(-10)).toThrow(WRONG_AMOUNT);
  });

  test("Debit valid amount", () => {
    const debited = account.debit(100);
    expect(debited).toBe(100);
    expect(account.getBalance()).toBe(100);
  });

  test("Debit invalid amount (0)", () => {
    expect(() => account.debit(0)).toThrow(WRONG_AMOUNT);
  });

  test("Debit invalid amount (negative)", () => {
    expect(() => account.debit(-5)).toThrow(WRONG_AMOUNT);
  });

  test("Debit more than balance", () => {
    expect(() => account.debit(300)).toThrow(INSUFFICIENT_BALANCE);
  });

  test("Update account holder name", () => {
    account.updateHolderName("Naga");
    expect(account.accountHolderName).toBe("Naga");
  });
});
