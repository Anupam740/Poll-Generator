import React, { useEffect, useState } from 'react';
import "./PollList.css"

const PollList = () => {
  const [polls, setPolls] = useState([]);

  const fetchPolls = async () => {
    try {
      const response = await fetch('http://localhost:8080/demo', {
        method: 'GET',
      });
      const data = await response.json();
      setPolls(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  const handleOptionSelect = async (pollId, selectedOption) => {
    // const confirmSelection = window.confirm(`Do you really want to select ${polls.selectedOption} option?`);


    // // Assuming you have an API endpoint to store the selected option in the database
    // if (confirmSelection){
    try {
      const response = await fetch(`http://localhost:8080/demo/${pollId}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedOption }),
      });
      if (response.ok) {
        // Update the polls state to reflect the user's selection
        const updatedPolls = polls.map((poll) =>
          poll.id === pollId ? { ...poll, selectedOption } : poll
        );
        setPolls(updatedPolls);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div id='polllistid' className="bg-gradient-to-b    from-black to-gray-800 w-full text-white md:h-fit" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: "25px" }}>Active Polls:</h1>
      {polls.map((poll, index) => (
        <div className="px-4 m-5 capitalize font-medium text-gray-400 hover:scale-105 duration-200" key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', fontSize: "20px" }}>
          <h1 style={{ marginBottom: '10px', fontSize: "30px", textAlign: "center", borderBottom: "2px dotted gray" }}>{index + 1}.   {poll.question}</h1>
          <div className="px-4 cursor-pointer m-5 capitalize font-medium text-gray-400 hover:scale-105 duration-200">
            <p className='hover:bg-gradient-to-b from-cyan-500 to-blue-900 ' onClick={() => handleOptionSelect(poll.id, 'option1')}>1: {poll.option1}</p>
            <p className='hover:bg-gradient-to-b from-cyan-500 to-blue-900 ' onClick={() => handleOptionSelect(poll.id, 'option2')}>2: {poll.option2}</p>
            <p className='hover:bg-gradient-to-b from-cyan-500 to-blue-900 ' onClick={() => handleOptionSelect(poll.id, 'option3')}>3: {poll.option3}</p>
            <p className='hover:bg-gradient-to-b from-cyan-500 to-blue-900 ' onClick={() => handleOptionSelect(poll.id, 'option4')}>4: {poll.option4}</p>
          </div>
          {poll.selectedOption && (
            <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
              You selected: {poll.selectedOption}
              
            </p>
               
          )}
        </div>
      ))}
    </div>
  );
}

export default PollList;
