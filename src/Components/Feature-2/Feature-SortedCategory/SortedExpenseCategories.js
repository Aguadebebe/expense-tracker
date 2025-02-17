import Filter from "./Filter";

export const SortedExpenseCategories = ({ expenses, selectedCategory, sortByCategory }) => {
  const validCategories = ["Bills", "Auto Parts", "Groceries"];

  const groupedExpenses = expenses.reduce((acc, expense, index) => {
    console.log(`Iteration ${index + 1}: Processing expense`, expense);
    console.log("Accumulator before update:", acc);

    const updatedAcc = {
      ...acc,
      [expense.category]: [...(acc[expense.category] || []), expense]
    };
    console.log("Accumulator after update:", updatedAcc);
    console.log("------------------------------"); // Just for readability

    return updatedAcc;
  }, {});

  console.log("Final grouped expenses:", groupedExpenses);

  return (
    <div>
      <Filter selectedCategory={selectedCategory} validCategories={validCategories} groupedExpenses={groupedExpenses} />
    </div>
  );
};
