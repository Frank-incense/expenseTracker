import "./Table.css"
import { useState } from "react"

function Search({onSearch}){
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(e){
        onSearch(searchTerm)
        setSearchTerm(e.target.value)
    }

    return(
        <>
            <input 
            type="search" 
            name="search" 
            id="search" 
            value={searchTerm}
            onChange={handleSearch} />
        </>
    )
}

export default Search