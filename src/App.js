import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/user/Products';
import Categories from './Components/admin/Categories';
import UpdateCategory from './Components/admin/UpdateCategory';
import AddCategory from './Components/admin/AddCategory';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element = {<Products />} />
        <Route path='/produits' element = {<Products />} />
        <Route path='/admin/categories' element={<Categories />}/>
        <Route path='/admin/categories/update/:id' element={<UpdateCategory/>}/>
        <Route path='/admin/categories/add' element={<AddCategory/>}/>
      </Routes>
    </div>
  );
}

export default App;
