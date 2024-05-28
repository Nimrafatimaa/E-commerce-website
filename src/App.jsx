import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopeCategory from './Pages/ShopeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSign from './Pages/LoginSign';
import Footer from './Components/Footer';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/mens' element={<ShopeCategory banner={men_banner} category='men' />} />
              <Route path='/women' element={<ShopeCategory banner={women_banner} category='women' />} />
              <Route path='/kids' element={<ShopeCategory banner={kid_banner} category='kid' />} />
              <Route path='/product' element={<Product />}>
                <Route path=':productId' element={<Product />} />
              </Route>
              <Route path='/Cart' element={<Cart />} />
              <Route path='/Login' element={<LoginSign />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
