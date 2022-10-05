import React,{useState} from 'react'

const Reviews = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setEmail(event.target.value);
  }

  // add state for holding error messages
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // first name is required
    if (name.length > 0) {
      const formData = { name: name, email: email, message: message};
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setName("");
      setEmail("");
      setMessage("");
      setErrors([]);
    } else {
      setErrors(["Name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.name} {data.email} {data.message}
      </div>
    );
  });

  return (
    <div className="bg-gray-800 flex flex-col justify-center">
      <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={handleSubmit}>
        <h2 className='text-4xl dark:text-white font-bold text-center'>REVIEWS</h2>
        <div className='flex flex-col text-gray-400 py-2' >
          <label>Full Names</label>
          <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" onChange={handleNameChange} value={name} />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label>Email</label>
          <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" onChange={handleEmailChange} value={email} />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label>Message</label>
          <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" onChange={handleMessageChange} value={message} />
        </div>
        <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shaow-teal-500/40 text-white font-semibold rounded-lg" type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Reviews</h3>
      {listOfSubmissions}
    </div>
  );
};

//   return (
//     <div>
//       <h1>Reviews</h1>
//     </div>
//   )
// }

export default Reviews
