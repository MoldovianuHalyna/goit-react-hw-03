import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>
        <FaUser />
        {name}
      </p>
      <p className={s.contactItemText}>
        <FaPhoneAlt />
        {number}
      </p>
      <button
        className={s.buttonDeleteContact}
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
