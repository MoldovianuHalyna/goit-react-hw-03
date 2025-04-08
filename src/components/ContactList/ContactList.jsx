import Contact from "../Contact/Contact";
import Grid from "../Grid/Grid";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contactList}>
      <Grid>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            </li>
          );
        })}
      </Grid>
    </ul>
  );
};

export default ContactList;
