import React, { useEffect, useState } from 'react'
import ToolBar from './ToolBar'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../Redux/CartSlice';
import TocIcon from '@mui/icons-material/Toc';


function Header() {

  

  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal);
  }, [])

  return (
    <div>
      <div className="container-fluid fixed-top">
        <ToolBar />
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link >
            <button type='btn' className="navbar-toggler py-2 px-3">
              <span className='fa fa-bars text-primary' ></span>
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse" > {/* menu */}
              <div className="navbar-nav mx-auto " >
                <Link to="/" className='nav-item nav-link active'>Home</Link>
                <Link to="/shop" className='nav-item nav-link'>Shop</Link>
                <Link to="/shopdetails" className='nav-item nav-link'>Shop Details</Link>
                <div className='nav-item dropdown '>
                  <Link className="nav-link" data-bs-toggle="dropdown">Category<KeyboardArrowDownIcon/></Link>
                  <div className="dropdown-menu m-0  bg-secondary rounded-0">
                    <Link to="/vegetables" className="dropdown-item">Vegetables</Link>
                    <Link to="/fruits" className="dropdown-item">Fruit</Link>
                    <Link to="/bread" className="dropdown-item">Bread</Link>
                    <Link to="/meat" className="dropdown-item">Meat</Link>
                  </div>
                </div>
                <Link to="/contact" className='nav-item nav-link'>Contact</Link>
              </div>

              <div className='d-flex m-3 me-0'>
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                  {/* search */}
                  <i class="fa fa-search text-primary" aria-hidden="true"></i>
                </button>
                <Link to="/cart" className="position-relative me-4 my-auto">
                  <i className='fa fa-shopping-bag fa-2x'></i>
                  <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>{totalItems}</span>
                </Link>
                <Link className="my-auto">
                  <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                </Link>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
//dropdown-toggle