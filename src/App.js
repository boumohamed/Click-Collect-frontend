import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/user/Products';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element = {<Products />} />
        <Route path='/produits' element = {<Products />} />
      </Routes>
    </div>
  );
}

export default App;
