import React, { useContext, useEffect, useState } from 'react'
import { CreateNoteContext } from '../context/NoteContext'
import api from '../utils/axiosConfig';
import { useNavigate } from 'react-router';

const AllCards = () => {
  const {note , setAllNotes} = useContext(CreateNoteContext);
  const navigate = useNavigate();

  const fetchAllNotes = async() => {
    const {data } = await api.get("/note/all")
    setAllNotes(data.data);
  }
  useEffect(()=>{
    fetchAllNotes()
  },[])

  const deleteHandler = async (id) => {
    await api.delete(`/note/delete/${id}`)
    fetchAllNotes()

  }
  const renderNote = note.map((elem , idx)=>{
    return (
        <div className='bg-amber-100 text-olive-700 px-3 py-4 rounded-md min-w-1/4 hover:scale-105' key={idx}>
            <div className='flex items-center h-max w-full justify-between'>
              <h2 className='text-5xl font-semibold'>{elem.title}</h2>
              <div className='flex gap-5'>
                <button onClick={(_id)=>{deleteHandler(elem._id)}} className='bg-red-700 text-amber-50 px-3 py-1 rounded-md h-max cursor-pointer active:scale-97'>
                  del
                </button>
                <button onClick={(_id)=>{navigate(`/note/${elem._id}`)}} className='bg-yellow-700 text-amber-50 px-3 py-1 rounded-md h-max cursor-pointer active:scale-97'>
                  edit
                </button>
              </div>
            </div>
            <p className='text-3xl'>{elem.desc}</p>
        </div>
  
    )
  })
  return (
    <div className='flex gap-5 mx-10 mt-10 flex-wrap shrink-0'>
        {renderNote.length > 0 ? renderNote : "No Note Created Yet"}
    </div>
  )
}

export default AllCards