
  const Filter = ({ 
    selectedCategory, 
    sortByCategory, 
    validCategories, 
    groupedExpenses }) => 
{
    
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <form>
                <div value={selectedCategory}
                    onChange={event => sortByCategory(event.target.value)}
                >
                    {/* You can add logic for the select dropdown here if needed */}
                </div>
            </form>
            <div>
                <h2 style={{ marginBottom: "10em" }}>Filter by Category</h2>
              
            </div>
            
            <ul>
                {Object.keys(groupedExpenses)
                    
                    .filter((category) => {
                        // Filter categories based on selectedCategory and validCategories
                        if (selectedCategory) {
                            return category === selectedCategory && validCategories.includes(category);
                        } else {
                            // If no category is selected, filter only those that exist in validCategories
                            return validCategories.includes(category);
                        }
                    })
                   
                    .map((category) => {
                        // Calculate the category for this totals
                        const categoryTotal = groupedExpenses[category].reduce((sum, expense) => {
                            const amount = parseFloat(expense.amount); // Convert to number
                            return sum + (isNaN(amount) ? 0 : amount); // Handle invalid values, conditional statement to make sure if the value is not a number that sum doesn't return NaN but a 0 or the added to the amount.
                        }, 0);

                        return (
                            <div key={category}>
                                <h3>{category}</h3>
                                <ul>
                                    {groupedExpenses[category].map((expense) => {
                                        const amount = parseFloat(expense.amount); // Convert to number for each expense
                                        return (
                                            <li key={expense.id}>
                                                - <span style={{ color: "gray" }}>{expense.title}</span> - 
                                                <span style={{ color: "purple" }}>${isNaN(amount) ? "0.00" : amount.toFixed(2)}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {/* Display the total for this category below the list of expenses */}
                                <p style={{ marginTop: "1em" }}>
                                    <strong style={{ color: "teal" }}>Total for {category}:</strong>
                                    <strong style={{ color: "red" }}>${categoryTotal.toFixed(2)}</strong>

                                </p>
                            </div>
                        );
                    })
                }
            </ul>

              
        </div>
    );
};

export default Filter;
