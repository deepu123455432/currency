

import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Coinpage from './pages/coinpage'
import Header from './components/Header'




function App() {
  
   
  return (
    <>
    
    <Router>
      <div  className='cointainer'>
      <Header/>
        <Routes>
        <Route path='/' element={<Homepage/>} exact/>
        <Route path="/coin" element={<Coinpage/>}/>
       
        </Routes>
          
        
      </div>
    </Router>
    </>
  )
}

export default App
