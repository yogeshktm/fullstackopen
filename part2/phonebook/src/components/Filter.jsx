export const Filter = ({handleSearch}) => {
    return(
        <div className="search">
            <input type="text" onChange={handleSearch} />
        </div>
    )
}