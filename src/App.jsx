import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import AddBooks from './pages/AddBook'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/addbooks' element={<AddBooks />} />
      </Routes>
    </>
  )
}

export default App
