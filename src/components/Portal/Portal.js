import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Catalog from '../Catalog/Catalog';

function Portal() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Catalog />
    </div>
  )
}

export default Portal;