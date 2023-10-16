/* eslint-disable react/prop-types */

const UserList = (props) => {
  return (
    <div className="p-16 bg-gray-400 flex flex-col gap-4 text-black border-t-8">
      <ul>
        {props.users.map((user) => {
          return (
            <li className="p-3 bg-white mb-4" key={user.age}>
              {user.name} {user.age} years old
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
