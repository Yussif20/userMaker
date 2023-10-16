/* eslint-disable react/prop-types */
const ErrorModal = ({ title, onCancel }) => {
  return (
    <>
      <div
        onClick={onCancel}
        className="fixed top-0 left-0 w-[100%] h-[100%] bg-red-100"
      ></div>
      <div className="p-6 ml-auto mt-auto bg-red-500 backdrop-blur-3xl">
        <h1>{title}</h1>
        <button
          onClick={onCancel}
          className="transition-all mt-6 text-white hover:bg-green-300 hover:text-black bg-green-600 duration-300"
        >
          Okay
        </button>
      </div>
    </>
  );
};
export default ErrorModal;
