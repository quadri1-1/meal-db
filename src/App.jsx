import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Meal from './pages/Meal';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  

  return (
    <div className='container-md'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/meal/:mealId' element={<Meal/>} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App
