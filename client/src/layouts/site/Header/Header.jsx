import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <React.Fragment>
        <header className='my-own-header'>
        <header>
        <div className="container">
            <div className="row">
                <div className="upper-header">
                <div className="col-6 socials">
                    <ul>
                        <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div className='col-6 contacts'>
                    <div><a href=""><i className="fa-solid fa-phone"></i>(+1) 234 5678 9101</a></div>
                    <div><a href=""><i className="fa-solid fa-envelope"></i>shop@yourdomain.com</a></div>
                </div>
                </div>
            </div>
            </div>
    </header>
    <header>
        <div className="container">
            <div className="row">
                <div className='lower-header'>
                    <div className="col-6 mylogo">
                            <h1>Selling<span>.</span></h1>
                        </div>
                    <div className="col-6 pages">
                        <ul>
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>Products</Link>
                            </li>
                            <li>
                                <Link to='/admin'>Admin</Link>
                            </li>
                            <li>
                                <Link></Link>
                            </li>
                            <li>
                                <Link to='/basket'>Basket</Link>
                            </li>
                            <li>
                                <Link>Blog</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    </header>
        </header>
    </React.Fragment>
  )
}

export default Header
