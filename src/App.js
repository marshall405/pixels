import React, {useState} from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import './App.css';

function App() {
  const [user, setUser] = useState()
 
  return (
    <div className="App">
    {
      user ?
        <Dashboard user={user}/>
        : 
        <Login setUser={setUser}/>
    }
    </div>
  );
}

export default App;
