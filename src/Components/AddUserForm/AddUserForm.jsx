/* eslint-disable react/prop-types */
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0) {
      return;
    }
    if (+userAge <= 0) {
      return;
    }
    props.onAddUser(userName, userAge);
    console.log(userName, userAge);
    setUserAge("");
    setUserName("");
  };
  return (
    <>
      <ErrorModal title={"Error"} />
      <form
        onSubmit={addUserHandler}
        className="p-16 bg-gray-400 flex flex-col gap-4 text-black"
      >
        <div className="flex gap-6">
          <label htmlFor="username">Username</label>
          <input
            className="bg-white"
            type="text"
            id="username"
            onChange={userNameChangeHandler}
            value={userName}
          />
        </div>
        <div className="flex gap-6">
          <label htmlFor="age">Age(years)</label>
          <input
            className="bg-white"
            type="number"
            id="age"
            onChange={userAgeChangeHandler}
            value={userAge}
          />
        </div>
        <button
          className="transition-all mt-6 text-white hover:bg-green-300 hover:text-black bg-green-600 duration-300"
          type="submit"
        >
          Create User
        </button>
      </form>
    </>
  );
};
export default AddUserForm;
