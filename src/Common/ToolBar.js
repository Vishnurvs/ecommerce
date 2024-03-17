import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
function ToolBar() {
    return (
        <div className='container topbar  bg-primary d-none d-lg-block'>
            <div className="d-flex justify-content-between">
                <div className="top-info ps-2">
                    <small className='me-3'>
                        <i className="me-2 text-secondary aria-hidden=true "><LocationOnIcon/></i>
                        <Link className='text-white'>4th Street, S.Alangulam</Link>
                    </small>
                    <small className='me-3'>
                        <i className="me-2 text-secondary"><EmailIcon/></i>
                        <Link className='text-white'>rvs1912@gmail.com</Link>
                    </small>
                </div>
                <div className="top-link pe-2">
                    <Link href='#' className='text-white'><small className='text-white mx-2'>Privacy Policy</small></Link>
                    <Link href='#' className='text-white'><small className='text-white mx-2'>Terms of Use</small></Link>
                    <Link href='#' className='text-white'><small className='text-white mx-2'>Sales and Refund</small></Link>
                </div>
            </div>
        </div>
    )
}

export default ToolBar
