import React, { useState } from 'react';

import { checkMessage, validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
  
      
    } else if (inputType === 'Name') {
      setName(inputValue);
     
    } else {
      setMessage(inputValue);
  
    }
  };

  const handleInputBlur = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      }
      
    } else if (inputType === 'Name') {
      setName(inputValue);
      if (!Name) {
        setErrorMessage('Name is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
    } else if (inputType ==='Message') {
      setMessage(inputValue);
      if (!checkMessage(message)) {
        setErrorMessage('Please enter a message');
        return;
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
    if (!validateEmail(email) || !Name) {
      setErrorMessage('Email orname is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Please enter a message`
      );
      return;
    }
    alert(`Hello ${Name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };




  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return (
    <div>
      <form>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input  placeholder="Name" name="Name" onBlur={handleInputBlur} onChange={handleInputChange} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input name = "email" onBlur={handleInputBlur} onChange={handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputMessage" class="form-label">Message</label>
    <input name = "Message" onBlur={handleInputBlur} onChange={handleInputChange} type="text" class="form-control" id="exampleInputmess"></input>
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