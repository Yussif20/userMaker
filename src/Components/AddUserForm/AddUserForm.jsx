const AddUserForm = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={addUserHandler}
        className="p-16 bg-gray-400 flex flex-col gap-4 text-black"
      >
        <div className="flex gap-6">
          <label htmlFor="username">Username</label>
          <input className="bg-white" type="text" id="username" />
        </div>
        <div className="flex gap-6">
          <label htmlFor="age">Age(years)</label>
          <input className="bg-white" type="number" id="age" />
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
