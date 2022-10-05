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

  const [errors, setErrors] = useState([])

  return (
    <div >
      <h1 className='text-3xl text-center font-extrabold '>Contact</h1>
      
      
    </div>
  )
}

export default Contact
