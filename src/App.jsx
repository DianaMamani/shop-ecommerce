import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs, CartPage, Categories, Checkout, Dashboard, Item, NotFound, Order } from './pages';
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
            <Route path='/products' element={<Categories greeting="Welcome to URBAN-BOUTIQUE" />} />
            <Route path='/categories/:id' element={<Categories />} />
            <Route path='/items/:id' element={<Item />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/orders/:id' element={<Order />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
