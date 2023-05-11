import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetail';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />

        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
