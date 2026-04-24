import React from 'react'
import {Routes , Route} from "react-router-dom"
import AllCards from '../pages/AllCards'
import CreateNote from '../pages/CreateNote'
import SingleNote from '../pages/SingleNote'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AllCards />} />
        <Route path='/note/create' element={<CreateNote />} />
        <Route path='/note/:id' element={<SingleNote />} />
    </Routes>
  )
}

export default MainRoutes