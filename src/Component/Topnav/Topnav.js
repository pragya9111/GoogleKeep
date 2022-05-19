import React from 'react'
import '../Topnav/Topnav.css'

function Topnav() {
  return (
    <nav>
      <div className='left'>
        <i class="ri-menu-line"></i>
        <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='' />
        <h1>Keep</h1>
      </div>
      <div className='mid'>
        <input type="text" value="Search" />
      </div>
      <div className='rgt'>
        <i class="ri-restart-line"></i>
        <i class="ri-list-unordered"></i>
        <i class="ri-settings-3-line"></i>

      </div>
    </nav>
  )
}

export default Topnav