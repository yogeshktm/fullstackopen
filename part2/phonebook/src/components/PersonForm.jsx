export const PersonForm = ({handlePhoneNumberChange,handleInputChange,addContact}) => {
    return(
        <form>
        <div>
        name: <input required onChange={handleInputChange} />
        </div>
        <div>
        Phone no: <input type="number" onChange={handlePhoneNumberChange} />
        </div>
        <div>
        <button onClick={addContact} type="submit">add</button>
        </div>
        </form>
    )
}
