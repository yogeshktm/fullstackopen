export const Persons = (props) => {
    const { searchText,persons,filteredData,deleteContact } = props;
    return(
        <div>
        {
        searchText.length > 1 ?
        filteredData.map(names =>
          <>
          <p key={names.name}>{names.name} : {names.number}    <button id={names.id} onClick={deleteContact}>Delete</button></p>
          </>
        )
        :
        persons.map(names =>
          <>
          <p key={names.name}>{names.name} : {names.number}    <button id={names.id} onClick={deleteContact}>Delete</button></p>
          </>
        )
        }
        </div>
    )
}