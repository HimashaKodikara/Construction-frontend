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
import { default as EditService } from './components/backend/services/Edit';
import { default as ShowProjects } from './components/backend/projects/Show';
import { default as CreateProject } from './components/backend/projects/Create';
import { default as EditProject } from './components/backend/projects/Edit';
import { default as ShowArticles } from './components/backend/articles/Show';
import { default as CreateArticles } from './components/backend/articles/Create';
import { default as EditArticles } from './components/backend/articles/Edit';

import { default as ShowTestimonials } from './components/backend/testimonials/Show';
import { default as CreateTestimonials } from './components/backend/testimonials/Create';
import {default as EditTestmonials} from './components/backend/testimonials/Edit';

import {default as ShowMembers} from './components/backend/members/Show';
import {default as CreateMembers} from './components/backend/members/Create';
import {default as EditMembers} from './components/backend/members/Edit';
import ServiceDetails from './components/frontend/ServiceDetails';
import ProjectDetails from './components/frontend/ProjectDetail';
import BlogDetail from './components/frontend/BlogDetail';
import ContactUs from './components/frontend/ContactUs';
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
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/admin/login' element={<Login />} />
          <Route path='/service/:id' element={<ServiceDetails />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
          <Route path='/blog/:id' element={<BlogDetail />} />


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

          <Route path='/admin/projects' element={
            <RequireAuth >
              <ShowProjects />
            </RequireAuth>
          }
          />

          <Route path='/admin/projects/create' element={
            <RequireAuth >
              <CreateProject />
            </RequireAuth>
          }
          />

          <Route path='/admin/projects/edit/:id' element={
            <RequireAuth >
              <EditProject />
            </RequireAuth>
          }
          />

          <Route path='/admin/projects/edit/:id' element={
            <RequireAuth >
              <EditProject />
            </RequireAuth>
          }
          />

          <Route path='/admin/articles' element={
            <RequireAuth >
              <ShowArticles />
            </RequireAuth>
          }
          />

          <Route path='/admin/articles/create' element={
            <RequireAuth >
              <CreateArticles />
            </RequireAuth>
          }
          />

          <Route path='/admin/articles/edit/:id' element={
            <RequireAuth >
              <EditArticles />
            </RequireAuth>
          }
          />


          <Route path='/admin/testimonials' element={
            <RequireAuth >
              <ShowTestimonials />
            </RequireAuth>
          }
          />

          <Route path='/admin/testimonials/create' element={
            <RequireAuth >
              <CreateTestimonials />
            </RequireAuth>
          }
          />

           <Route path='/admin/testimonials/edit/:id' element={
            <RequireAuth >
              <EditTestmonials />
            </RequireAuth>
          }
          />

          <Route path='/admin/members' element={
            <RequireAuth >
              <ShowMembers />
            </RequireAuth>
          }
          />
          <Route path='/admin/members/create' element={
            <RequireAuth >
              <CreateMembers />
            </RequireAuth>
          }
          />
          <Route path='/admin/members/edit/:id' element={
            <RequireAuth >
              <EditMembers />
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
