import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
// import Home from './files/Home';
import About from './files/About';
import Movies from './files/Movies';
import Contact from './files/Contact';
import Main from './component/Main'
import Footer from './component/Footer'



function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/Movies' element={<Movies/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    
   </Routes>
    <Footer/>
   </BrowserRouter>
     </>
  )
}

export default App

// const App=() => {
//   return(
//     <>
//    <BrowserRouter>
//    <Navbar/>
//    <Slider/>
//    <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/Movies' element={<Movies/>}/>
//     <Route path='/About' element={<About/>}/>
//     <Route path='/Contact' element={<Contact/>}/>
//    </Routes>
//    </BrowserRouter>

//     </>
//   )
// }

// export default App
