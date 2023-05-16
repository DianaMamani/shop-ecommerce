import { Header } from './components/Header/Header';
import { MainContent } from './components/Content/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/products' element={<ItemListContainer greeting="Welcome to URBAN-B" />} />
          <Route path='/categories/:id' element={<ItemListContainer />} />
          <Route path='/items/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
