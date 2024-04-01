import Header from './components/Header'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
 
    <Footer />

    
    </>
  );
}

export default App;
