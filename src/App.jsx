import './App.css'
import { Route, Routes } from 'react-router-dom'
import PhoneList from './pages/PhoneList'
import PhoneDets from './pages/PhoneDets'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PhoneList/>}/>
        <Route path='/:id' element={<PhoneDets/>}/>
      </Routes>
    </>
  )
}

export default App
