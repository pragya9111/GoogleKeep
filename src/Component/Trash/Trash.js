import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Trash/Trash.css'

function Trash(props) {

  const navigate = useNavigate()

  const { trash, settrash } = { ...props.name }
  const deletenotes = (p) => {
    const index = p.target.id
    console.log(index)
    const arr = [...trash]
    arr.splice(index, 1)
    settrash(arr)
    navigate('/')
  }

  const hold3 = trash.map((val, id) => {
    return <div className="notes2" onClick={deletenotes} key={id} id={id}>
      <h5>Title:- {val.title}</h5>
      <p>Notes :- {val.notes}</p>
    </div>
  })

  return (
    <>
      <div className='trashcontainer' >
        <div className='head2'>
          <h1>Your deleted notes display here</h1>
        </div>
        <div className="notesholder3">
          {hold3}
        </div>
      </div>
    </>
  )
}

export default Trash