
import { Route, Routes } from 'react-router-dom';
import Products from './Components/user/Products';
import AdProducts from './Components/admin/AdProducts';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element = {<Products />} />
        <Route path='/user/produits' element = {<Products />} />
        <Route path='/admin/produits' element = {<AdProducts />} />
      </Routes>
    </div>
  );
}

export default App;
