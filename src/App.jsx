import "./App.css";
import AddUserForm from "./Components/AddUserForm/AddUserForm";
import UserList from "./Components/UserList/UserList";

function App() {
  const userList = [{ name: "yousef" }, { name: "Rawan" }];
  return (
    <>
      <h1 className="bg-green-300 text-black p-3">Hello you</h1>
      <AddUserForm />
      <UserList users={userList} />
    </>
  );
}

export default App;
