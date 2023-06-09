import './App.css'
import { Route, Routes } from 'react-router-dom'
import PhoneList from './pages/PhoneList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PhoneList/>}/>
      </Routes>
    </>
  )
}

export default App
