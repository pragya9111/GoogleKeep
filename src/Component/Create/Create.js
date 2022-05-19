import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Create/Create.css'

function Create(props) {
  const navigate = useNavigate()
  const { notes, setnotes, noteslist, setnoteslist } = { ...props.name }
  const [input1, setinput1] = useState("")
  const [input2, setinput2] = useState("")

  const inp1handle = (p) => {
    setinput1(p.target.value)
  }
  const inp2handle = (p) => {
    setinput2(p.target.value)

  }
  const clickhandle = () => {
    var a = {
      title: input1,
      notes: input2
    }
    let arr = [...noteslist]
    arr.push(a)
    setnoteslist(arr)
    setinput1("")
    setinput2("")
  }

  const update = (p) => {
    let arr = [...noteslist]
    var a = {
      title: arr[p.target.id].title,
      notes: arr[p.target.id].notes,
    }
    setnotes({ ...notes, a })
    navigate(`/update/${arr[p.target.id].title}/${arr[p.target.id].notes}/${p.target.id}}`)
  }

  let hold = noteslist.map((val, id) => {
    return <div className='notes' key={id} id={id}>
      <h5>Title:- {val.title}</h5>
      <p>Notes:- {val.notes}</p>
      <button onClick={update} id={id} className='upbtn' >Update</button>
    </div>
  })

  return (
    <>
      <div className='createcontainer' >
        <div className='inputbox'>
          <div className='inp1' >
            <input type="text" placeholder='Title '
              onChange={inp1handle}
              value={input1} />
          </div>

          <div className='inp2' >
            <input type="text" placeholder='Note '
              onChange={inp2handle}
              value={input2} />
          </div>

          <button className='btn' onClick={clickhandle}
          > Save</button>

        </div>
        <div className='notesholder' >
          {hold}
        </div>
      </div>
    </>
)}

export default Create