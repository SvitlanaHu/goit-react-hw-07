import { lazy, Suspense } from "react";
import { Loader } from "../Loader/Loader";
import styles from './Phonebook.module.css';

const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
const ContactList = lazy(() => import("../ContactList/ContactList"));
const SearchBox = lazy(() => import("../SearchBox/SearchBox"));

export const Phonebook = () => {
  return (
    <>
      <div className={styles.container}>
        <Suspense fallback={<Loader />}>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </Suspense>
      </div>
    </>
  );
};