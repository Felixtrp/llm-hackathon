import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaseDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    case_description: '',
    case_arisal_time: '',
    deadline_time: '',
    document_txt: '',
    other_parties_names: '',
    other_parties_relationships: '',
    prior_legal_consultation: '',
    ...location.state // Access location.state directly
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api', formData);
      const { data } = response;

      // Navigate to FinalPage and pass data as state
      navigate('/final', { state: { aiResult: data } });
    } catch (error) {
      console.error('Error fetching the result:', error);
      // Handle error state if needed
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Case Details</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="case_description" style={styles.label}>
            Case Description:
            <textarea
              id="case_description"
              name="case_description"
              value={formData.case_description}
              onChange={handleChange}
              style={styles.input}
              rows="5"
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="case_arisal_time" style={styles.label}>
            Incident Arisal Time:
            <input
              type="text"
              id="case_arisal_time"
              name="case_arisal_time"
              value={formData.case_arisal_time}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="deadline_time" style={styles.label}>
            Key Deadlines:
            <input
              type="text"
              id="deadline_time"
              name="deadline_time"
              value={formData.deadline_time}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="document_txt" style={styles.label}>
            Supporting Documents:
            <textarea
              id="document_txt"
              name="document_txt"
              value={formData.document_txt}
              onChange={handleChange}
              style={styles.input}
              rows="3"
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="other_parties_names" style={styles.label}>
            Other Parties Involved (Names):
            <textarea
              id="other_parties_names"
              name="other_parties_names"
              value={formData.other_parties_names}
              onChange={handleChange}
              style={styles.input}
              rows="2"
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="other_parties_relationships" style={styles.label}>
            Relationship to Other Parties:
            <textarea
              id="other_parties_relationships"
              name="other_parties_relationships"
              value={formData.other_parties_relationships}
              onChange={handleChange}
              style={styles.input}
              rows="2"
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="prior_legal_consultation" style={styles.label}>
            Prior Legal Consultation:
            <textarea
              id="prior_legal_consultation"
              name="prior_legal_consultation"
              value={formData.prior_legal_consultation}
              onChange={handleChange}
              style={styles.input}
              rows="2"
            />
          </label>
        </div>

        <button type="submit" style={styles.button}>Submit</button>
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
    textAlign: 'left',
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

export default CaseDetails;
