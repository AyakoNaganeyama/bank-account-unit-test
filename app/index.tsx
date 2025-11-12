// app/App.tsx
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BankAccount } from "../api/bankaccount";

export default function App() {
  const [account] = useState(new BankAccount("Ayako", 200));
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(account.getBalance());

  const handleDeposit = () => {
    try {
      account.deposit(Number(amount));
      setBalance(account.getBalance());
      setAmount("");
    } catch (err: any) {
      Alert.alert(err.message);
    }
  };

  const handleDebit = () => {
    try {
      account.debit(Number(amount));
      setBalance(account.getBalance());
      setAmount("");
    } catch (err: any) {
      Alert.alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bank App</Text>
      <Text>Account Holder: {account.accountHolderName}</Text>
      <Text>Balance: ${balance.toFixed(2)}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleDeposit}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDebit}>
          <Text style={styles.buttonText}>Debit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff", // <-- explicit light background
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#000" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    borderRadius: 5,
    marginVertical: 10,
    color: "#000", // <-- make input text black
  },
  buttons: { flexDirection: "row", marginTop: 10 },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});
