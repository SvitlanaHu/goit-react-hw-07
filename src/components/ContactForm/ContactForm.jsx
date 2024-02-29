import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './ContactForm.module.css';
import { addContacts } from "../../redux/operations";
import { useDispatch } from "react-redux";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(/^\+?[0-9\s-]+$/, "Invalid phone number"),
});

export default function ContactForm() {
  const nameField = useId();
  const numberField = useId();

  const dispatch = useDispatch();
  const handleAddContact = (newContact) => {
    dispatch(addContacts(newContact));
  };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                  name: "",
                  number: "",
                }}
                validationSchema={userSchema}
                onSubmit={(values, actions) => {
                  const newContact = {
                    name: values.name.replace(/\b\w/g, (l) => l.toUpperCase()),
                    phone: values.number,
                  };

                  handleAddContact(newContact);
                  actions.resetForm();
                }}
            >
                <Form className={styles.form} autoComplete="off">
                    <div className={styles.box}>
                        <label htmlFor={nameField}>Name</label>
                        <Field
                            className={styles.label}
                            type="text"
                            name="name"
                            placeholder="Name Surname"
                            id={nameField}
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className={styles.error}
                        />
                    </div>
                    
                    <div className={styles.box}>
                        <label htmlFor={numberField}>Number</label>
                        <Field
                            className={styles.label}
                            type="text"
                            name="number"
                            placeholder="Number"          
                            id={numberField}
                        />
                        <ErrorMessage
                           name="number"
                           component="span"
                           className={styles.error}
                        />
                    </div>
                    
                    <button type="submit" className={styles.button}>Add contact</button>
                </Form>
            </Formik>
        </div>
    );
}
