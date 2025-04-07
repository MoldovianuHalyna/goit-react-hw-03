import ContactForm from "./src/ContactForm/ContactForm";
import ContactList from "./src/ContactList/ContactList";
import Container from "./src/Container/Container";
import SearchBox from "./src/SearchBox/SearchBox";
import Grid from "./src/Grid/Grid";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";

import { useEffect, useState } from "react";
import s from "./main.module.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts([
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]);
    }
  }, []);

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };
  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    toast.success("Contact deleted successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      icon: <MdDeleteOutline />,
    });
  };
  return (
    <Container>
      <h1 className={s.header}>Phone Book</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChangeInput={handleChangeInput} />

      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />

      <ToastContainer />
    </Container>
  );
}

export default App;
