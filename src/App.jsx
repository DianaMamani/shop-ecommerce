import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories, Dashboard, Item } from './pages';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/products' element={<Categories greeting="Welcome to URBAN-B" />} />
          <Route path='/categories/:id' element={<Categories />} />
          <Route path='/items/:id' element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
