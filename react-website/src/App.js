import './App.css';
import Sidebar from './components/sidebar';
import React from 'react';

function App() {
  return (
    <div className="flex bg-secondary">
     <Sidebar />
     <div className="flex-1 p-8">
        <h2>Main content</h2>
     </div>
    </div>
  );
}

export default App;
