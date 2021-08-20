import { useState } from 'react';

const Search = (props) => {
    const [searchInput, setSearchInput] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        props.filterHomes(searchInput)
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='search' value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    );

}


export default Search;