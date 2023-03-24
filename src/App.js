import './App.css';
import Home from './MyComponent/home'
import Login from './MyComponent/login'
import SignIn from './MyComponent/signin';
function App() {
  return (
    <div className='container-fluid'>

    <div className='row '>
      <Home />
      <Login />
            
    </div>
    </div>
  );
}

export default App;
