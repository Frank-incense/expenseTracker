import Search from "./Search"
import "./Table.css"

function Table(){
    return(
    <aside className="col">
        <Search/>
        <table className="table">
            <thead>
                <td>Expense</td>
                <td>Description</td>
                <td>Category</td>
                <td>Amount</td>
                <td>Date</td>
            </thead>
            <tbody>
                {/* Add rows */}
            </tbody>
        </table>
    </aside>
)
}

export default Table;