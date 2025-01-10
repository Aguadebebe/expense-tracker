
const Filter = ({ selectedCategory, sortByCategory, validCategories, groupedExpenses }) => {
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
                <h3>The next step is to figure out how to add the categories totals</h3>
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
        .map((category) => (
            <div key={category}>
                <h3>{category}</h3>
                <ul>
                    {groupedExpenses[category].map((expense) => (
                        <li key={expense.id}>
                             {/**<span style={{ color: "gray", fontSize: "1.3em" }}>{expense.category}</span>*/}
                             - <span style={{ color: "purple" }}>{expense.title}</span> - 
                             <span style={{ color: "red" }}>${expense.amount}</span>
                             {/**<span style={{ color: "black", marginLeft: ".2em" }}>{expense.date}</span>*/}

                        </li>
                    ))}
                </ul>
            </div>
        ))
    }
</ul>
          
        </div>
    );
};

export default Filter;


              
 /**<ul>
                {groupedExpenses
                    .filter((groupedExpense) => {
                        // Filter based on selectedCategory and validCategories
                        if (selectedCategory) {
                            return groupedExpense.category === selectedCategory && validCategories.includes(groupedExpense.category);
                        } else {
                            // If no category is selected, filter only those that exist in validCategories
                            return validCategories.includes(groupedExpense.category);
                        }
                    })
                    Object.keys(groupedExpenses).map((groupedExpense) => (
                        <li key={groupedExpense.id}>
                             <span style={{ color: "gray", fontSize: "1.3em" }}>{groupedExpense.category}</span> 
                             - {groupedExpense.title} - 
                             <span style={{ color: "red" }}>${groupedExpense.amount}</span>
                        </li>
                    ))

                     }
                      
                    </ul>*/