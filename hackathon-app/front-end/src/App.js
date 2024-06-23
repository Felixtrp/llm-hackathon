import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Questions from './components/Questions';
import CaseRepo from './components/CaseRepo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/CaseRepo" element={<CaseRepo />} />
      </Routes>
    </Router>
  );
}

export default App;

// A Comment.