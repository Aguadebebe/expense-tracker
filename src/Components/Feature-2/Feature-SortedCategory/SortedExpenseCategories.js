import Filter from "./Filter";

export const SortedExpenseCategories = ({ expenses, selectedCategory, sortByCategory }) => {
  const validCategories = ["Bills", "Auto Parts", "Groceries"];

  const groupedExpenses = expenses.reduce((acc, expense, index) => {
    const updatedAcc = {
      ...acc,
      [expense.category]: [...(acc[expense.category] || []), expense]
    };

    return updatedAcc;
  }, {});

  return (
    <div>
      <Filter selectedCategory={selectedCategory} validCategories={validCategories} groupedExpenses={groupedExpenses} />
    </div>
  );
};

// this holds the validCategories array to dilter the groups of expenses and the reduce logic.
