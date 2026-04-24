import React, { useContext, useState } from 'react'
import { CreateNoteContext } from '../context/NoteContext';
import api from '../utils/axiosConfig';

const CreateNote = () => {
  const {setAllNotes} = useContext(CreateNoteContext);

  const [inputData , setInputData] = useState({title:"" ,desc:""});
  const submitHandler = (e) => {
    e.preventDefault();
    createNote()


  }
  
  const createNote = async () => {
    await api.post("/note/create" , {
      title:inputData.title,
      desc:inputData.desc
    })
    
  }
  return (
    <div className='mt-10 w-screen flex justify-center items-center'>
        <form className='flex flex-col w-1/3 gap-5' onSubmit={(e)=>submitHandler(e)}>
            <input name='title' type="text" placeholder='title...' value={inputData.title} onChange={(e)=>{setInputData({...inputData , title:e.target.value})}} className='border-2 border-white outline-none px-3 py-2 rounded-md' />
            <input name="desc" type="text" placeholder='description...' value={inputData.desc} onChange={(e)=>{setInputData({...inputData , desc:e.target.value})}} className='border-2 border-white outline-none px-3 py-2 rounded-md' />
            <input type="submit" value="Create" className='border-2 border-white outline-none px-3 py-2 rounded-md cursor-pointer active:scale-97' />
        </form>
    </div>
  )
}

export default CreateNote