import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [subject, setSubject] = useState([])
  const [message, setMessage] = useState([])
  const [submittedData, setSubmittedData] = useState([])

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value)
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
  const [errors, setErrors] = useState([]);

    if (name.length > 0) {
      const formData = {name: name, email: email, subject: subject, message: message}
      const dataArray = [...submittedData, formData]
      setSubmittedData(dataArray)
      setName("")
      setEmail("")
      setMessage("")
      setSubject("")
      setErrors([])
    } else {
      setErrors(["Name is required!"])
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.name} {data.email} {data.subject} {data.message}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNameChange} value={name} />
        <input type="text" onChange={handleNameChange} value={name} />
        <input type="text" onChange={handleNameChange} value={name} />
        <input type="text" onChange={handleNameChange} value={name} />
      </form>
    </div>
  );
  

  return (
    <div >
      <h1 className='text-3xl text-center font-extrabold '>Contact</h1>
      
      
    </div>
  )
}

export default Contact
