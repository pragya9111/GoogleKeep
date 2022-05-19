import React from 'react'
import '../Sidenav/Sidenav.css'
import { Link } from 'react-router-dom'

function Sidenav() {
  const linkStyle = {
    textDecoration: "none",
    color: "#707070",
  }
  return (
    <div className='sidenav'>
      
      <div className='bar' >
        <i class="ri-edit-2-line"></i>
        <Link style={linkStyle} to='/'>Create</Link>
      </div>
      <div className='bar' >
        <i class="ri-delete-bin-3-line"></i>
        <Link style={linkStyle} to='/delete'>Delete</Link>
      </div>
      <div className='bar' >
        <i class="ri-delete-bin-2-line"></i>
        <Link style={linkStyle} to='/trash'>Trash</Link>
      </div>
      
    </div>
)}

export default Sidenav