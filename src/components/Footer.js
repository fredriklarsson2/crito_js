import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <img className="background-lines-white-right" src="images/background-lines-white-right.svg" />
            <div className="top-footer">
                <div className="footer-logo">
                    <img src="images/logotype-white.svg" alt="Crito logotype" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
                <div className="footer-links">
                    <h5>Company</h5>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div className="footer-links">
                    <h5>Help</h5>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-links">
                    <h5>Resources</h5>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
                <div className="footer-links">
                    <h5>Link</h5>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="container">
            <div className="bottom-footer">
                <div className="copyright">
                    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                </div>
                <div className="social-media">
                    <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer