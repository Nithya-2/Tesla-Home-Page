import { useState } from 'react'
import './App.css'
import {Card} from './Components/Card/Card';
import {NavbarWithMegaMenu} from './Components/Navbar/Nav';

function App() {

  return (
    <div className='test'>
      <NavbarWithMegaMenu/>
      <Card />
    </div>
  )
}

export default App
