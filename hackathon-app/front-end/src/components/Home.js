import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const startQuiz = () => {
    navigate('/questions');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Welcome to the Quiz</h1>
      <button onClick={startQuiz} style={{ padding: '10px 20px', fontSize: '16px' }}>Start</button>
    </div>
  );
}

export default Home;
