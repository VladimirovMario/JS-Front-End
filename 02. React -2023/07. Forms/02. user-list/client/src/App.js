import { Fragment, useEffect, useState } from "react";
import "./App.css";
import * as userService from "./services/userService";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import { formValidations } from "./utils/formValidations";

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    userService
      .getAll()
      .then((userData) => {
        setUsers(userData);
        console.log("userData", userData);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  const onUserCreateSubmit = async (e) => {
    // Prevent form submit
    e.preventDefault();
    // Take form data form DOM tree
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // Send request to server
    const createdUser = await userService.createUser(data);
    // If success add new entry in state
    setUsers((state) => [...state, createdUser]);
    // Close modal in UserList
  };

  const onUserUpdateSubmit = async (e, userId) => {
    // Prevent form submit
    e.preventDefault();
    // Take form data form DOM tree
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // Send request to server
    const updatedUser = await userService.updateUser(userId, data);
    // If success add update entry in state
    setUsers((state) => state.map((x) => (x._id === userId ? updatedUser : x)));
    // Close modal in UserList
    console.log(userId, data);
  };

  const onUserConfirmDelete = async (userId) => {
    // Delete from server
    await userService.onDelete(userId);
    // Delete from state (Setting state must be at one line!)
    setUsers((state) => state.filter((x) => x._id !== userId));
  };

  const onFormChangeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const validateForm = (e) => {
    const errors = formValidations(e);
    // setFormErrors((state) => ({...state, lastName: "Last name should be between 3 and 15 characters!",}));
    setFormErrors(errors);
  };

  return (
    <Fragment>
      <Header />

      <main className="main">
        <section className="card users-container">
          <SearchBar />

          <UserList
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserUpdateSubmit={onUserUpdateSubmit}
            onUserConfirmDelete={onUserConfirmDelete}
            formValues={formValues}
            onFormChangeHandler={onFormChangeHandler}
            formErrors={formErrors}
            validateForm={validateForm}
          />

          <Pagination />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
