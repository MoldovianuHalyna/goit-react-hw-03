import { nanoid } from "nanoid";

import { toast } from "react-toastify";
import { Slide } from "react-toastify";
import { TbFaceIdError } from "react-icons/tb";
import { FaRegThumbsUp } from "react-icons/fa";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone } = event.target.elements;
    if (!name.value || !phone.value) {
      toast.error(" Please enter both a name and a phone number", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        icon: <TbFaceIdError />,
      });
      return;
    }
    addContact({ name: name.value, number: phone.value, id: nanoid() });
    toast.success("Contact created successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      icon: <FaRegThumbsUp />,
    });
    name.value = "";
    phone.value = "";
  };
  return (
    <div>
      <form className={s.formWrapper} onSubmit={handleSubmit}>
        <label className={s.formLabel}>
          <h3>Name</h3>
          <input className={s.formInput} type="text" name="name" />
        </label>
        <label className={s.formLabel}>
          <h3>Number</h3>
          <input className={s.formInput} type="text" name="phone" />
        </label>
        <button className={s.buttonAddContact} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
