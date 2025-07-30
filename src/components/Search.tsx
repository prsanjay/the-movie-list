import type { SearchProps } from './Search.interface.ts'

const Search = ({ searchTerm, setSearchTerm }: Readonly<SearchProps>) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search" />
        <input 
          type="text"
          placeholder='Search through movies...'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
      </div>
    </div>
  )
}

export default Search