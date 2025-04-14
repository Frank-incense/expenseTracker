import "./Table.css"
import { useState } from "react"

function Search({onSearch, handleChange}){
    const [searchTerm, setSearchTerm] = useState("")
    const [sortValue, setSortValue] = useState("")

    function handleSearch(e){
        setSearchTerm( e.target.value)
        onSearch(e.target.value)
        
    }
    function handleSort(e){
        setSortValue(e.target.value)
        handleChange(e.target.value)
    }
    
    return(
        <>
            <input 
            type="search" 
            name="search" 
            id="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch} />
            <select name="sort" id="sort" value={sortValue} onChange={handleSort}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="0-100">0-100</option>
            </select>
        </>
    )
}

export default Search