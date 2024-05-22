import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../layouts/admin/Footer/Footer,'
import Header from '../../layouts/admin/Header/Header'

const AdminRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default AdminRoot