import Search from "./Search"
import "./Table.css"

function Table({expenses, handleSearch}){
    return(
    <aside className="col">
        <Search onSearch={handleSearch}/>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Expense</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Amount</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {/* Add rows */}
                {expenses.map(expense=>{
                   return <tr key={expense.id}>
                        <td>{expense.expense}</td>
                        <td>{expense.detail}</td>
                        <td>{expense.category}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.date}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </aside>
)
}

export default Table;