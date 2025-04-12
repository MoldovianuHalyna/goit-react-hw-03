import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Slide } from "react-toastify";
import { TbFaceIdError } from "react-icons/tb";
import { FaRegThumbsUp } from "react-icons/fa";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  phone: "",
};
const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("This field is Required "),
  phone: Yup.string()
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("This field is required"),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, options) => {
    addContact({ name: values.name, number: values.phone, id: nanoid() });
    options.resetForm();
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
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <label className={s.formLabel}>
            <h3>Name</h3>
            <Field className={s.formInput} type="text" name="name"></Field>
            <ErrorMessage className={s.error} name="name" component="p" />
          </label>
          <label className={s.formLabel}>
            <h3>Phone number</h3>
            <Field className={s.formInput} type="text" name="phone"></Field>
            <ErrorMessage className={s.error} name="phone" component="p" />
          </label>
          <button className={s.buttonAddContact} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
