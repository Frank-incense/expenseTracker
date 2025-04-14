import Search from "./Search"
import "./Table.css"

function Table({expenses, handleSearch, onDelete, handleChange}){
    return(
    <aside className="col">
        <Search onSearch={handleSearch} handleChange={handleChange}/>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Expense</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Amount</td>
                    <td>Date</td>
                    <td></td>
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
                        <td><button onClick={()=>onDelete(expense.id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </aside>
)
}

export default Table;