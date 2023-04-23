import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ContainerNavbar from './components/ContainerNavbar';
import Catalog from './pages/Catalog';
import Equipment from './pages/Equipment';
import FormClient from './pages/FormClient';
import Home from './pages/Home';
import Login from './pages/Login';
import Tender from './pages/Tender';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>,
    },
    {
      path: 'home',
      element: <Home/>,
    },
    {
      path: 'catalog',
      element: <Catalog/>,
    },
    {
      path: 'equipment',
      element: <Equipment/>,
    },
    {
      path: 'tender',
      element: <Tender/>,
    },
    {
      path: 'formClient',
      element: <FormClient/>,
    },
  ]);

  return (
    <div className="App">
      <ThemeProvider
        breakpoints={ ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'] }
        minBreakpoint="xxs"
      >
        <ContainerNavbar/>
        <RouterProvider router={ router }/>
      </ThemeProvider>
    </div>
  );
}

export default App;
