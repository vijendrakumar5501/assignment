import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

<div className='menu'>
        <ul className='submenu'>
          <Link to='/signin'>sign in</Link>
          <Link to='/legal'>legal</Link>
          <Link to='/licences'>licences</Link>
          <Link to='/security'>security</Link>
          <Link to='/career'>career</Link>
          <Link to='/press'>press</Link>
          <Link to='/support'>support</Link>
          <Link to='/status'>status</Link>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar