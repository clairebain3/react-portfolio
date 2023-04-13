import React, { useState } from 'react';
import { send } from 'emailjs-com';

import { checkMessage, validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  // const [email, setEmail] = useState('');
  // const [Name, setName] = useState('');
  // const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'claire.bain3@gmail.com',
    message: '',
    reply_to: '',
  });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    // const { target } = e;
    // const inputType = target.name;
    // const inputValue = target.value;

    // // Based on the input type, we set the state of either email, username, and password
    // if (inputType === 'reply_to') {
    //   setToSend.reply_to(inputValue);
  
      
    // } else if (inputType === 'from_name') {
    //   setToSend.from_name(inputValue);
     
    // } else {
    //   setToSend.message(inputValue);
  
    // }
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleInputBlur = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setToSend({ ...toSend, [e.target.name]: e.target.value });

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'reply_to') {
      // setToSend.reply_to(inputValue);
      if (!validateEmail(toSend.reply_to)) {
        setErrorMessage('Email is invalid');
        return;
      } else{
        setErrorMessage('')
      }
      
      
    } else if (inputType === 'from_name') {
      // setToSend.from_name(inputValue);
      if (!toSend.from_name) {
        setErrorMessage('Name is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      } else{
        setErrorMessage('')
      }
    } else if (inputType ==='message') {
      // setToSend.message(inputValue);
      if (!checkMessage(toSend.message)) {
        setErrorMessage('Please enter a message');
        return;
      } else{
        setErrorMessage('')
      }
    }
    else{
      setErrorMessage('')
    }
  };


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(toSend.reply_to) || !toSend.from_name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkMessage(toSend.message)) {
      setErrorMessage(
        `Please enter a message`
      );
      return;
    }
    alert(`Hello ${toSend.from_name}`);

    send(
      'service_617bezd',
      'template_490kdlb',
      toSend,
      'I2ZKunGP3_Ktfc23K'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    // setName('');
    // setMessage('');
    // setEmail('');
    // setErrorMessage('');
    setToSend({from_name: '', message: '', reply_to: ''})
    // setToSend({ ...toSend, [e.target.name]: '' });
  };




  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return (
    <div class = "contactForm">
      <form onSubmit={handleFormSubmit}>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input value={toSend.from_name} name="from_name" onBlur={handleInputBlur} onChange={handleInputChange} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input value={toSend.reply_to} name = "reply_to" onBlur={handleInputBlur} onChange={handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputMessage" class="form-label">Message</label>
    <textarea value={toSend.message} name = "message" onBlur={handleInputBlur} onChange={handleInputChange} type="text" class="form-control" id="exampleInputmess"></textarea>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" onClick={handleFormSubmit} class="btn btn-primary">Submit</button>
</form>
{errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
  )};

export default Contact;