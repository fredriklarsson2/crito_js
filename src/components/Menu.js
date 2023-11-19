import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="mobile-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>

    
  )
}

export default Menu

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Menu = ({ menuOpen }) => {
//   return (
//     <nav className={`main-menu ${menuOpen ? 'open' : ''}`}>
//       {menuOpen && (
//         <>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/services">Services</NavLink>
//           <NavLink to="/news">News</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Menu;