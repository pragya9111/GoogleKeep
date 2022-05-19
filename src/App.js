import React, {useState} from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Topnav from './Component/Topnav/Topnav'
import Sidenav from './Component/Sidenav/Sidenav'
import Create  from './Component/Create/Create'
import Delete from './Component/Delete/Delete'
import Trash from './Component/Trash/Trash'
import Update from './Component/Update/Update'

function App() {
  const [notes, setnotes] = useState({
    title:"",
    notes:""
  }) 
  const [noteslist, setnoteslist] = useState([])
  const [trash, settrash] = useState([])


  return (
    <>
    <div className='container'>
      <Topnav/>
      <div className='holder' >
        <Sidenav/>
        <div className='center' >
          <Routes>
            <Route path='/' element={<Create name={{notes,setnotes,noteslist,setnoteslist}} />} />
            <Route path='/delete' element={<Delete name={{notes,setnotes,noteslist,setnoteslist,trash,settrash}}/>} />
            <Route path='/trash' element={<Trash name={{notes,setnotes,noteslist,setnoteslist,trash,settrash}} />} />
            <Route path='/update/:title/:note/:index' element={<Update name={{notes,setnotes,noteslist,setnoteslist,trash,settrash}} />} />

          </Routes>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default App
