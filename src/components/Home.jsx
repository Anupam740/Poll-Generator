import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  const navigate = useNavigate();

  // const handlePollList = () => {
  //   // Assuming 'PollList' is the path to the component that displays the list of polls
  //   navigate('/pollList');
  // };

  const navbarStyle = {
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    padding: '10px 50px',
    fontWeight: 'bold',
    margin:"10px"
  };

  const brandStyle = {
    fontSize: '1.5rem',
  };

  // const logoStyle = {
  //   marginRight: '10px',
  // };

  return (
    <>
    <Navbar/>
    <div name="home" className=" h-56 w-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4      md:flex-row">
    
      <Navbar style={navbarStyle}>
        <Container>
          {/* Using Link from react-router-dom to handle navigation */}
          <Link to="/generatepolls" style={brandStyle}>
            Generate Your Poll
          </Link>
        </Container>
      </Navbar>
      <br />
      <Navbar style={navbarStyle}>
        <Container>
          {/* Using onClick to handle navigation */}
          <Link to="/polllist" style={brandStyle}>
            See the Active Polls
          </Link>
        </Container>
      </Navbar>
      
            
            
            
        </div>
      
    </div>
      
    </>
  );
}

export default Home;
