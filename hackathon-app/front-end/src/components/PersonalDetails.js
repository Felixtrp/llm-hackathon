import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    income: '',
    marital_status: '',
    dependents: '',
    legal_aid_eligible: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinue = () => {
    navigate('/case-details', { state: formData }); // Pass formData as state
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Personal Details</h1>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="occupation" style={styles.label}>
            Occupation:
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="income" style={styles.label}>
            Annual Income (£):
            <input
              type="text"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="marital_status" style={styles.label}>
            Marital Status:
            <input
              type="text"
              id="marital_status"
              name="marital_status"
              value={formData.marital_status}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dependents" style={styles.label}>
            Dependents:
            <input
              type="text"
              id="dependents"
              name="dependents"
              value={formData.dependents}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="legal_aid_eligible" style={styles.label}>
            Legal Aid Eligible:
            <input
              type="text"
              id="legal_aid_eligible"
              name="legal_aid_eligible"
              value={formData.legal_aid_eligible}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <button type="button" onClick={handleContinue} style={styles.button}>
          Continue
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#f0f0f0',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
    textAlign: 'center',
  },
  form: {
    maxWidth: '400px',
    width: '100%',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '1.2rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '20px',
  },
};

export default PersonalDetails;
