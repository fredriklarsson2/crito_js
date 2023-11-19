import React from 'react'
import { Link } from 'react-router-dom'
import img_backgroundWhiteLines_right from '../assets/images/svg/background-lines/background-lines-white-right.svg'
import img_logotype_white from '../assets/images/svg/logotypes/logotype-white.svg'
import SocialMedia from '../components/global/SocialMedia'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <img className="background-lines-white-right" src={img_backgroundWhiteLines_right} />
                <div className="top-footer">
                    
                    <div className="top-footer-left">
                        <div className="footer-logo">
                            <img src={img_logotype_white} alt="Crito logotype" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                            </p>
                        </div>
                    </div>

                    <div className="top-footer-right">
                        <div className="footer-links">
                            <h5>Company</h5>
                            <Link to="/about"><span>About</span></Link>
                            <Link to="/features"><span>Features</span></Link>
                            <Link to="/works"><span>Works</span></Link>
                            <Link to="/career"><span>Career</span></Link>
                        </div>
                        <div className="footer-links">
                            <h5>Help</h5>
                            <Link to="/customer-support"><span>Customer Support</span></Link>
                            <Link to="/delivery-details"><span>Delivery Details</span></Link>
                            <Link to="/terms-conditions"><span>Terms & Conditions</span></Link>
                            <Link to="/privacy-policy"><span>Privacy Policy</span></Link>
                        </div>
                        <div className="footer-links">
                            <h5>Resources</h5>
                            <Link to="/free-ebooks"><span>Free eBooks</span></Link>
                            <Link to="/development-tutorial"><span>Development Tutorial</span></Link>
                            <Link to="/how-to-blog"><span>How to - Blog</span></Link>
                            <Link to="/youtube-playlist"><span>Youtube Playlist</span></Link>
                        </div>
                        <div className="footer-links">
                            <h5>Link</h5>
                            <Link to="/free-ebooks"><span>Free eBooks</span></Link>
                            <Link to="/development-tutorial"><span>Development Tutorial</span></Link>
                            <Link to="/how-to-blog"><span>How to - Blog</span></Link>
                            <Link to="/youtube-playlist"><span>Youtube Playlist</span></Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </footer>

        <hr />
        
        <div className="bottom-footer">
            <div className="container">
                <div className="copyright">
                    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                </div>
                <SocialMedia />
            </div>
        </div>
    </>
  )
}

export default Footer