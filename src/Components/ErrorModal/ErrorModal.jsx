/* eslint-disable react/prop-types */
const ErrorModal = ({ title }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-red-100"></div>
      <div className="p-6 ml-auto mt-auto bg-red-500 backdrop-blur-3xl">
        <h1>{title}</h1>
      </div>
    </>
  );
};
export default ErrorModal;
