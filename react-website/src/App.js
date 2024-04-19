import './App.css';
import Sidebar from './components/Sidebar';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ClassNav from './pages/ClassNav';
import RegistrationStatus from './pages/RegistrationStatus';
import Plan from './pages/Plan';
import MySchedules from './pages/MySchedules';


function App() {
  return (
    <div className="flex bg">
     <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classnav" element={<ClassNav />} />
          <Route path="/registrationstatus" element={<RegistrationStatus />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/myschedules" element={<MySchedules />} />
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
