import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllContacts = () => {
    return axios.get(baseUrl);
}

const addContact = (newObject) => {
    return axios.post(baseUrl,newObject);
}

const deleteContact = (contactId) => {
    return axios.delete(`${baseUrl}/${contactId}`);
}

const updateContact = (contactId,newObject) => {
    return axios.put(`${baseUrl}/${contactId}`,newObject);
}


export default {
    getAllContacts: getAllContacts,
    addContact: addContact,
    deleteContact: deleteContact,
    updateContact: updateContact
}