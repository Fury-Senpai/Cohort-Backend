import { useState } from 'react'
import Header from './components/Header'
import MainRoutes from './Routes/MainRoutes'
function App() {

  return (
    <main className='select-none'>
      <Header />
      <MainRoutes />
    </main>
  )
}

export default App
