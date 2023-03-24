import './App.css';
import Login from './MyComponent/login'
import Home from './MyComponent/home';
import SignIn from './MyComponent/signin';
import { lazy } from 'react';
import { Routes, BrowserRouter as B, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className='container-fluid'>

      <div className='row '>

        <B>
          <Home />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signin" element={<SignIn />}></ Route>
          </Routes>
        </B>

      </div>
    </div>
  );
}

export default App;
