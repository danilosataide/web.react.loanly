import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import ContainerNavbar from './components/ContainerNavbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Equipment from './pages/Equipment';
import Tender from './pages/Tender';
function App() {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <ContainerNavbar />
        {/* <Login></Login> */}
        {/* <Home></Home> */}
        {/* <Catalog></Catalog> */}
        {/* <Equipment></Equipment> */}
        <Tender></Tender>
      </ThemeProvider>
    </div>
  );
}

export default App;