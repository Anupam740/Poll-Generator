import React, { useState } from 'react';
import "./GeneratePolls.css"

function GeneratePolls() {
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.question || !form.option1 || !form.option2 || !form.option3 || !form.option4) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/demo', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while submitting the form.');
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id='GeneratePolls' className=" pt-20   w-full text-white md:h-fit" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: "25px" }}>Create your Poll</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label  htmlFor="question"> Your Poll :</label>
          <input
            id="question"
            placeholder="Poll"
            name="question"
            type="text"
            onChange={handleChange}
            style={{ width: '100%', padding: '5px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="option1">Option 1:</label>
          <input
            id="option1"
            type="text"
            placeholder="Option 1"
            name="option1"
            onChange={handleChange}
            style={{ width: '100%', padding: '5px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="option2">Option 2:</label>
          <input
            id="option2"
            type="text"
            placeholder="Option 2"
            name="option2"
            onChange={handleChange}
            style={{ width: '100%', padding: '5px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="option3">Option 3:</label>
          <input
            id="option3"
            type="text"
            placeholder="Option 3"
            name="option3"
            onChange={handleChange}
            style={{ width: '100%', padding: '5px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="option4">Option 4:</label>
          <input
            id="option4"
            type="text"
            placeholder="Option 4"
            name="option4"
            onChange={handleChange}
            style={{ width: '100%', padding: '5px', fontSize: '16px' }}
          />
        </div>
        <button className='text-white  bg-gradient-to-b from-cyan-500 to-blue-900 px-6 w-1/2 rounded-md px-6 py-3 m-4 duration-200 hover:scale-105 ' type="submit" style={{ padding: '8px 15px', fontSize: '16px',  color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default GeneratePolls;
