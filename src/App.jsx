import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Freelancer from './Freelancer';
import FreelancerProfile from './FreelancerProfile';
import Applications from './Applications';
import BrowseJobs from './BrowseJobs';

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/freelancer" element={<BrowseJobs />} />
          <Route path="/freelancer-dashboard" element={<Freelancer />} />
          <Route path="/freelancer-profile" element={<FreelancerProfile />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
