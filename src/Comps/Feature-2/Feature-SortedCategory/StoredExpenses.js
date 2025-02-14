import { useEffect } from "react";

 export const StoredExpenses = ({ expenses, setExpenses }) => {
  // Only run once when this component is first rendered
  
  useEffect(() => {
    if (localStorage.getItem("storedExpensesData")) {
       
      console.log("Before parsing:", localStorage.getItem("storedExpensesData")); // Log before JSON.parse
      setExpenses(JSON.parse(localStorage.getItem("storedExpensesData")));
      console.log("After parsing:", JSON.parse(localStorage.getItem("storedExpensesData")));
    }
  }, []);
  // Run every time our expenses state changes
  useEffect(() => {
    const stringifiedExpenses = JSON.stringify(expenses);
    console.log("Before storing (stringified):", stringifiedExpenses); // Log after JSON.stringify
    localStorage.setItem("storedExpensesData", stringifiedExpenses);
  }, [expenses]);

  useEffect(() => {
    console.log("Updated expenses state:", expenses);
  }, [expenses]);  // Runs every time expenses changes
  
};

