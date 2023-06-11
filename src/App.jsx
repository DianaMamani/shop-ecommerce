import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartPage, Categories, Checkout, Dashboard, Item } from './pages';
import { Header } from './components/Header/Header';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/products' element={<Categories greeting="Welcome to URBAN-BOUTIQUE"  />} />
            <Route path='/categories/:id' element={<Categories />} />
            <Route path='/items/:id' element={<Item />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
