import React from 'react';

function Questions() {
  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1>Your Case</h1>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Question 1: What is the capital of France?
            <input type="text" name="question1" style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Question 2: What is 2 + 2?
            <input type="text" name="question2" style={{ marginLeft: '10px' }} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Question 3: What is the capital of Spain?
            <input type="text" name="question3" style={{ marginLeft: '10px' }} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Questions;
