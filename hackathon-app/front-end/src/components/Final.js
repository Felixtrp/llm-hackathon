import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function FinalPage() {
  const location = useLocation();
  const { aiResult } = location.state;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank You!</h1>
      <h2 style={styles.subHeading}>Your Case Summary:</h2>
      <div style={styles.resultContainer}>
        <ReactMarkdown>{aiResult.data}</ReactMarkdown> {/* Display AI results as Markdown */}
      </div>
      <p style={styles.thankYouText}>Thank you for submitting your case details.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '5%',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  subHeading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#555',
  },
  resultContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  thankYouText: {
    fontSize: '1.2rem',
    marginTop: '2rem',
    color: '#666',
  },
};

export default FinalPage;
