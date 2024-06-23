import React, { useState } from 'react';
import axios from 'axios';

function Questions() {
  const [answers, setAnswers] = useState({ question1: '', question2: '', question3: '' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api', answers);
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching the result:', error);
    }
  };

  if (result) {
    return (
      <div style={{ textAlign: 'center', marginTop: '10%' }}>
        <h1>Result</h1>
        <p>{result.message}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1>Quiz Questions</h1>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Question 1: What is the capital of France?
            <input type="text" name="question1" value={answers.question1} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Question 2: What is 2 + 2?
            <input type="text" name="question2" value={answers.question2} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Question 3: What is the capital of Spain?
            <input type="text" name="question3" value={answers.question3} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
        </div>
      </form>
      <button onClick={handleContinue} style={{ padding: '10px 20px', fontSize: '16px' }}>Continue</button>
    </div>
  );
}

export default Questions;
