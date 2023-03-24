import './App.css';
// import Login from './MyComponent/login'
// import Home from './MyComponent/home';
// import SignIn from './MyComponent/signin';
import { lazy, Suspense } from 'react';
import { Routes, BrowserRouter as B, Route } from 'react-router-dom'
const Home = lazy(() => import('./MyComponent/home'))
const SignIn = lazy(() => import('./MyComponent/signin'))
const Login = lazy(() => import('./MyComponent/login'))
// import SignIn from './MyComponent/signin';
function App() {
  return (
    <div className='container-fluid'>
      <div className='row '>

        <B>
          <Home />
          <Routes>
            <Route path="/" element={<Suspense fallback={<div>Loding logi...</div>}><Login /></Suspense>}></Route>
            {/* <Route path="/signin" element={<Home />}></ Route> */}
            <Route path="/signin" element={<Suspense fallback={<div>Loding...</div>}><SignIn /></Suspense>}></Route>
          </Routes>
        </B>
      </div>
    </div>
  );
}

export default App;
