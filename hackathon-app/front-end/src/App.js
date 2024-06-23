import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PersonalDetails from './components/PersonalDetails';
import CaseDetails from './components/CaseDetails';
import Final from './components/Final';
import CaseRepo from './components/CaseRepo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/case-details" element={<CaseDetails />} />
        <Route path="/final" element={<Final/>} />
        <Route path="/case-repo" element={<CaseRepo/>} />
      </Routes>
    </Router>
  );
}

export default App;
