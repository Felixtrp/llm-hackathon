import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    income: '',
    marital_status: '',
    dependents: '',
    legal_aid_eligible: '',
    case_description: '',
    case_arisal_time: '',
    deadline_time: '',
    document_txt: '',
    other_parties_names: '',
    other_parties_relationships: '',
    prior_legal_consultation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
        <h1>Your case.</h1>
        <h2>Please complete the form below.</h2>
        <h4>Answers left blank will be ignored.</h4>
        <hr></hr>
        <hr></hr>

        <form onSubmit={handleSubmit}>
            
        <h3>Personal Infomation.</h3>

        <div style={{ marginBottom: '20px' }}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>
            What is your occupation?:
            <textarea
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
            <label>
            What is your annual income (£)?:
            <textarea
                name="income"
                value={formData.income}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
            <label>
            What is your marital status?:
            <textarea
                name="marital_status"
                value={formData.marital_status}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        
        <div style={{ marginBottom: '20px' }}>
            <label>
            How many dependents do you have?:
            <textarea
                name="dependents"
                value={formData.dependents}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
            <label>
            Are you ineligible for legal aid?:
            <textarea
                name="legal_aid_eligible"
                value={formData.legal_aid_eligible}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        <hr></hr>
        <hr></hr>

        <h3>Case Details</h3>

        <div style={{ marginBottom: '20px' }}>
            <label>
            Please provide a detailed description of your case:
            <textarea
                name="case_description"
                value={formData.case_description}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>
            When did the incidents surrounding your case first arise?
            <textarea
                name="case_arisal_time"
                value={formData.case_arisal_time}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <label>
            Are there any key deadlines associated with your case?
            <textarea
                name="deadline_time"
                value={formData.deadline_time}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>


        <div style={{ marginBottom: '20px' }}>
            <label>
            Text of supporting documents.
            <textarea
                name="document_txt"
                value={formData.document_txt}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>


        <div style={{ marginBottom: '20px' }}>
            <label>
            Please provide the full names of any other parties to your case.
            <textarea
                name="other_parties_names"
                value={formData.other_parties_names}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
            <label>
            What is your relationship to the other named parties?
            <textarea
                name="other_parties_relationships"
                value={formData.other_parties_relationships}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        
        <div style={{ marginBottom: '20px' }}>
            <label>
            Have you had a previous legal consultations regarding this case?
            <textarea
                name="prior_legal_consultation"
                value={formData.prior_legal_consultation}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
        </div>
        
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Form;