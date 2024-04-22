import './App.css';
import Sidebar from './components/sidebar';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ClassNav from './pages/ClassNav';
import RegistrationStatus from './pages/RegistrationStatus';
import Plan from './pages/Plan';
import MySchedules from './pages/MySchedules';


function App() {
  return (
     <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-8">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classnav" element={<ClassNav />} />
            <Route path="/registrationstatus" element={<RegistrationStatus />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/myschedule" element={<MySchedules />} />
          </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
