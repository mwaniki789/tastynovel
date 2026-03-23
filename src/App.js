// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProducts from './components/AddProducts';
import MakePayment from './components/MakePayment';
import GetProducts from './components/GetProducts';



function App() {
  return (
    <Router>
       
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addproduct' element={<AddProducts/>}/>
      <Route path='/makepayment' element={<MakePayment/>}/>
      <Route path='/' element={<GetProducts/>}/>
      
    </Routes>


    
    </Router>
    
   
  );
}

export default App;
