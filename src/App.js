import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>

   </Routes>
   </>
  );
}

export default App;
