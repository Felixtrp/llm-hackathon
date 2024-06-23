import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/personal-details');
  };

  const loadRepos = () => {
    navigate('/case-repo');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Welcome to the MisTrial.</h1>
      <h2>The AI solution to improving legal access.</h2>
      
      <button onClick={startQuiz} style={buttonStyle}>I need legal help.</button>
      <button onClick={loadRepos} style={buttonStyle}>I provide legal help.</button>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  margin: '10px',
  cursor: 'pointer',
};

export default Home;
