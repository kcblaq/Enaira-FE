import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from './component/registration/login/Login';
import Register from './component/registration/Register';
import Profile from './component/dashboard/Profile';
import Dashboard from './component/dashboard/Dashboard';



function App() {
  return (
    <div className="flex w-full flex-col min-h-screen m-auto rounded-lg items-center border-2 border-purple-500 md:w-1/3 content-center" >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='dashboard' element={< Dashboard />} />
          <Route path='profile' element={< Profile />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
