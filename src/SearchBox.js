const SearchBox = ({searchValue, onSearchChange}) => {
   return (
      <div className="pa2">
         <input
            className="pa3 ba b--washed-red bg-light-gray"
            type='search'
            placeholder="Search..."
            onChange={onSearchChange}
         ></input>
      </div>
   )
}

export default SearchBox