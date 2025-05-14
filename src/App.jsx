import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Service from './components/frontend/service';
import Projects from './components/frontend/Projects';
import Login from './components/backend/login'
import Dashbaord from './components/backend/Dashbaord';
import './assets/css/style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/frontend/common/RequireAuth';
import Show from './components/backend/services/Show';
import CreateService from './components/backend/services/Create';
import {default as EditService} from './components/backend/services/Edit';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/admin/login' element={<Login />} />

          <Route path='/admin/dashboard' element={
            <RequireAuth >
              <Dashbaord />
            </RequireAuth>
          }
          />
           <Route path='/admin/services' element={
            <RequireAuth >
              <Show />
            </RequireAuth>
          }
          />
          
          <Route path='/admin/services/create' element={
            <RequireAuth >
              <CreateService />
            </RequireAuth>
          }
          />
    <Route path='/admin/services/edit/:id' element={
            <RequireAuth >
              <EditService />
            </RequireAuth>
          }
          />

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position='top-right' />
    </>
  )
}

export default App
