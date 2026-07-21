
import { useState } from 'react'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { ReegisterPage } from './pages/RegisterPage'

function App() {
  const [currentPage, setcurrentPage] = useState<'login'| 'register'>('register')
  return (
    <>
      {currentPage === "login"?(
        <LoginPage onNavigateToRegister={()=>setcurrentPage('register')}/>
      ):(
        <ReegisterPage onNavigateToLogin={()=>setcurrentPage('login')}/>
      )}
    </>
  )
}

export default App
