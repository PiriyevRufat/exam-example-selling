import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='my-footer'>
      <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-5 about-footer">
                        <h2>ABOUT US</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                    </div>
                    <div className="col-md-3 quick-footer">
                        <h2>QUICK LINKS</h2>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 socials-footer">
                        <h2>FOLLOW US</h2>
                        <ul>
                        <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 ml-auto footer-card">
            <h2>Featured Products</h2>
            </div>
        </div>
        <div className='row pt-5 mt-5 mb-5'>
        <p className="text-center text-muted">Copyright ©2024 All rights reserved | This template is made with  by <i className="icon-heart" aria-hidden="true"></i> Colorlib</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
