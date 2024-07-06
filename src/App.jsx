import { useState } from 'react'
import './App.css'
import Header from './Header'
import Siderbar from './Siderbar'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";
import Product from './pages/Product'
import Categories from './pages/Categories'
import Customer from './pages/Customer'
import Inventory from './pages/Inventory'
import Settings from './pages/Settings'
import Report from './pages/Report'
import FakeData from './pages/FakeData'

function App() {
  const [SidebarToggle, setSidebarToggle] = useState(false);

  const OpenSiderbar = () => {
    setSidebarToggle(!SidebarToggle);
  }

  return (
    <>
      <div className='grid-container'>
        <Siderbar  OpenSidebarToggle={SidebarToggle} OpenSidebar={OpenSiderbar} />
        <Header OpenSidebar={OpenSiderbar} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/FakeData' element={<FakeData />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='/Categories' element={<Categories />}></Route>
          <Route path='/Customer' element={<Customer />}></Route>
          <Route path='/Inventory' element={<Inventory />}></Route>
          <Route path='/Settings' element={<Settings />}></Route>
          <Route path='/Report' element={<Report />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App