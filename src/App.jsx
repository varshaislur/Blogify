import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className='container'>
  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    
  </div>
  );
}

export default App;
