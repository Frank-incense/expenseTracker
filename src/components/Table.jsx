import Search from "./Search"
import "./Table.css"

function Table(){
    return(
    <aside className="col">
        <Search/>
        <table className="table">
            <thead>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
            </thead>
            <tbody>
                {/* Add rows */}
            </tbody>
        </table>
    </aside>
)
}

export default Table;