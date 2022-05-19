import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Delete/Delete.css'

function Delete(props) {
  const navigate = useNavigate()
  const { noteslist, setnoteslist, trash, settrash } = { ...props.name }
  const deletenotes = (p) => {
    let index = p.target.id
    console.log(index)
    let arr2 = [...noteslist]
    let task = {
      title: arr2[index].title,
      notes: arr2[index].notes
    }
    let arr3 = [...trash]
    arr3.push(task)
    settrash(arr3)
    arr2.splice(index, 1)
    setnoteslist(arr2)
    navigate('/')
  }
  let hold2 = noteslist.map((val, id) => {
    return <div className="notes2" onClick={deletenotes} key={id} id={id}>
      <h5>Title :- {val.title}</h5>
      <p>Note :- {val.notes}</p>
    </div>
  })
  return (
    <>
      <div className='deletecontainer' >

        <div className='head1'>
          <h1>Delete your notes</h1>
        </div>
        <div className="notesholder2">
          {hold2}
        </div>

      </div>
    </>

  )
}

export default Delete