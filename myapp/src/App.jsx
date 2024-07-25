import { Route, Routes} from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Map from './components/Map'
import Api from './components/Api'
import Post from './components/Post'
import Poki from './components/Poki'




function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/sign' element={<Signup />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/statebasics' element={<Statebasics />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/greet' element={<Greet />} />
        <Route path='/map' element={<Map />} />
        <Route path='/api' element={<Api />} />
        <Route path='/post' element={<Post />} />
        <Route path='/poki' element={<Poki />} />
       
      
      </Routes>
    

    </>
  )
}

export default App
