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
    <div >
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNameChange} value={name} />
        <input type="text" onChange={handleEmailChange} value={email} />
        <input type="text" onChange={handleMessageChange} value={message} />
        <button type="submit">Submit</button>
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
