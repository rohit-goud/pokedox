import React, { useEffect } from 'react'

import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Background from "./components/Background"
import "./scss/index.scss"
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import MyList from './pages/MyList'
import Search from './pages/Search'
import About from './pages/About'
import Compare from './pages/Compare'
import Pokemon from './pages/Pokemon'
import { ToastContainer,ToastOptions,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useAppDispatch, useAppSelector } from './app/hooks'
import { clearToasts, setUserstatus } from './app/slices/AppSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from './utils/FirebaseConfig'

function App() {
  const { toasts } = useAppSelector(({ app }) => app);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if(currentUser){
        dispatch(setUserstatus({email:currentUser.email}))
      }
    })
  })

  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [toasts, dispatch]);
  return (
    <div className='main-container'>
      <Background/>
      <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route element={<Search/>} path="/search"/>
          <Route element={<MyList/>} path="/list"/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Compare/>} path="/compare"/>
          <Route element={<Pokemon/>} path="/pokemon/:id"/>
          <Route element={<Navigate to="/pokemon/1"/>}path="*"/>
        </Routes>
        
        <Footer/>
        <ToastContainer/>
        
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App