const Filter = ({ expenses, selectedCategory, sortByCategory, validCategories  }) => {
    return (
        <div>
            <form>
                <div value={selectedCategory}
                    onChange={event => sortByCategory(event.target.value)}
                >
                    {/* You can add logic for the select dropdown here if needed */}
                </div>
            </form>
            <div>
                <h2>Filter by Category</h2>
            </div>
            <ul>
                {expenses
                    .filter((expense) => {
                        // Filter based on selectedCategory and validCategories
                        if (selectedCategory) {
                            return expense.category === selectedCategory && validCategories.includes(expense.category);
                        } else {
                            // If no category is selected, filter only those that exist in validCategories
                            return validCategories.includes(expense.category);
                        }
                    })
                    .map((expense) => (
                        <li key={expense.id}>
                            {expense.title} - {expense.category} - ${expense.amount}
                        </li>
                    ))

                     }
                      
            </ul>
        </div>
    );
};

export default Filter;

/**<button style={{ cursor: "pointer"}}
              type="submit"
             >
              Add Expense
             </button>*/

             /**<option value="">Select a category</option>
            {validCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}*/
            /**<select 
              value={selectedCategory}
              onChange={event => sortByCategory(event.target.value)}
           >
            
           </select>*/