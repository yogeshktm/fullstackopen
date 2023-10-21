import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { Notification } from './components/Notification'

import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchText,setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState();
  const [errorMessage, setErrorMessage] = useState(null);

  const getData = () => {
    personService.getAllContacts()
    .then(response => {
      console.log(response.data)
      setPersons(response.data);
    })
  }  
  useEffect(getData,[]);


 
 const handleInputChange = (e) => {
    let inputText = e.target.value;
    setNewName(inputText);
  }
  const handlePhoneNumberChange = (e) => {
    let inputText = e.target.value;
    setNewPhoneNumber(inputText);
  }

  const handleSearch = (e) => {
    let inputText = e.target.value;
    setSearchText(inputText);
    let filteredPhoneBook = [...persons];
    filteredPhoneBook = filteredPhoneBook.filter((el) => el.name.toLowerCase().includes(searchText.toLowerCase()));
    console.log('filtelred',filteredPhoneBook);
    setFilteredData(filteredPhoneBook);
  }

  const addContact = (event) => {
    event.preventDefault()
    let findDuplicate = persons.find((element) => element.name === newName);
    console.log('Dup', findDuplicate);
    if ((newName.length > 1) && (findDuplicate === undefined)) {
      let personsData = { name: newName, number: newPhoneNumber };

      personService.addContact(personsData)
      .then(response => {
        setPersons(persons.concat(response.data));
        setErrorMessage(`${newName} added`);
        setTimeout(() => {
          setErrorMessage(null);
        },5000)
      })
    }
    else if (findDuplicate != undefined) {
      if (window.confirm(`${findDuplicate.name} is already in the phonebook, you want to update it ?`))
      {
        let updatedPersonData = { name: findDuplicate.name, number: newPhoneNumber };
        let personsData = [...persons];
        let foundIndex = personsData.findIndex(el => el.name == newName);
        console.log('found',foundIndex);
        personsData[foundIndex].number = newPhoneNumber;
        personService.updateContact(findDuplicate.id,updatedPersonData)
        .then(response => {
          setPersons(personsData);
          setErrorMessage(`${newName} updated`);
          setTimeout(() => {
            setErrorMessage(null);
          },5000)
        })

      }
    }
  }

  const deleteContact = (event) => {
    console.log(event.target.id);
    let personsData = [...persons];
    let personsIndex = personsData.findIndex(el => el.id === parseInt(event.target.id));
    console.log('ddd',event.target.id);
    let personName = personsData[personsIndex].name;
    const alertMessage = `Are you sure want to delete ${personName}?`;
    console.log(personName);
    if(personsIndex > -1) {
      if (window.confirm(alertMessage)) {
        personService.deleteContact(parseInt(event.target.id))
        .then((response) => {
          personsData.splice(personsIndex,1);
          setPersons(personsData);
        })
        .catch(error => {
          console.log(error.response.status);
          if(error.response.status === 404){
            setErrorMessage(`${personName} already removed from the server`);
            setTimeout(() => {
              setErrorMessage(null);
            },5000)
          }
        })
      }
    }
    console.log(personsData);
  }

  return (
    <div className='phonebook'>
      <h2>Phonebook</h2>
      <h3>Person form</h3>
     <Notification message={errorMessage}></Notification>
      <PersonForm addContact={addContact} handlePhoneNumberChange={handlePhoneNumberChange} handleInputChange={handleInputChange} ></PersonForm>
      <Filter handleSearch={handleSearch}></Filter>
      <h2>Numbers</h2>
      <Persons searchText={searchText} persons={persons} filteredData={filteredData} deleteContact={deleteContact}></Persons>
    </div>
  )
}

export default App