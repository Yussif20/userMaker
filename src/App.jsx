import { useState } from "react";
import "./App.css";
import AddUserForm from "./Components/AddUserForm/AddUserForm";
import UserList from "./Components/UserList/UserList";

// let initialUsers = [{ name: "yousef", age: 22 }];

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <>
      <h1 className="bg-green-300 text-black p-3">Hello you</h1>
      <AddUserForm onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
