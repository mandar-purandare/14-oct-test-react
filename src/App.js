import './App.css';
import { Routes, Route } from 'react-router-dom';
import Todo from './Todo';
import HomePage from './HomePage';
import Reducer from './Reducer';
import Login from './Login';
import Register from './Register';
import ContextCounter from './ContextCounter';
import Product from './Product';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/todo' element={<Todo/>}/>
        <Route exact path='/reducer' element={<Reducer/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/contextcounter' element={<ContextCounter/>}/>
        <Route exact path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
