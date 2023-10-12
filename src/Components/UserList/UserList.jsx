const UserList = (props) => {
  return (
    <>
      <div className="container bg-white text-green h-8 w-8">
        <ul>
          {props.users.map((user) => {
            <li key={user}> hello{user}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default UserList;
