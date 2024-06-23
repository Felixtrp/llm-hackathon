import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const startQuiz = () => {
    navigate('/Form');
  };

  const loadRepos = () => {
    navigate('/CaseRepo');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Welcome to the MisTrial.</h1>
      <h2>The AI solution to improving legal access.</h2>
      
      <button onClick={startQuiz} style={{ padding: '10px 20px', fontSize: '16px' }}>I need legal help.</button>
      <button onClick={loadRepos} style={{ padding: '10px 20px', fontSize: '16px' }}>I provide legal help.</button>
    </div>
  );
}

export default Home;
