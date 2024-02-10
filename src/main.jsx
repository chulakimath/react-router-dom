import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import User from './components/user/User.jsx';
import Contact from './components/contact/Contact.jsx';
import Github, { gitHubInfoLoader } from './components/github/Github.jsx';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user' element={<User />}>
        <Route path=':username' element={<User />} />
      </Route>
      <Route path='contact' element={<Contact />} />

      <Route
        loader={gitHubInfoLoader}
        path="github" element={<Github />}
      />

      <Route path='*' element={<div>Page not found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
