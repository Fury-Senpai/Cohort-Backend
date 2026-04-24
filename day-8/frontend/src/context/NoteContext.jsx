import React, { Children, createContext, useState } from 'react';
export const CreateNoteContext = createContext(null);

const NoteContext = (props) => {
  const [note , setAllNotes] = useState([{title:"title 1" , desc:"desc..."} , {title:"title 2" , desc:"desc..."}]);
  return (
    <CreateNoteContext.Provider value={{note , setAllNotes}}>
     
        {props.children}
    </CreateNoteContext.Provider>
  )
}

export default NoteContext