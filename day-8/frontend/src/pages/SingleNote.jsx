import React, { useContext, useEffect, useState } from 'react'
import { CreateNoteContext } from '../context/NoteContext'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import api from '../utils/axiosConfig';

const SingleNote = () => {
    const params = useParams()
    const navigate = useNavigate();
    const [filterNote , setFilterNote] = useState({title:"" ,desc:""});

    const fetchNote = async()=>{
        const {data} = await api.get(`/note/${params.id}`);
        setFilterNote(data.data);
    }

    useEffect(()=>{
        fetchNote()
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        updateTodo();
        navigate("/ ")
    }

    const changeHandler = (e) => {
        setFilterNote({
            ...filterNote,
            [e.target.name] : e.target.value
        })
    }

    const updateTodo = async()=>{
        await api.patch(`/note/update/${params.id}` , {
            title : filterNote?.title,
            desc: filterNote?.desc
        });
    }
  return (
    <div className='mt-10 w-screen flex justify-center items-center'>
        <form className='flex flex-col w-1/3 gap-5' onSubmit={(e)=>{submitHandler(e)}}>
            <input name='title'  type="text" placeholder='title...' onChange={(e)=>changeHandler(e)} value={filterNote?.title} className='border-2 border-white outline-none px-3 py-2 rounded-md' />
            <input name='desc' type="text" placeholder='description...' onChange={(e)=>changeHandler(e)} value={filterNote?.desc} className='border-2 border-white outline-none px-3 py-2 rounded-md' />
            <input type="submit" value="Create" className='border-2 border-white outline-none px-3 py-2 rounded-md cursor-pointer active:scale-97' />
        </form>
    </div>
  )
}

export default SingleNote