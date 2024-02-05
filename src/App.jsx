import React from 'react'
import classes from './modules/main.module.scss';
import { Navbar } from './components/Navbar';
import { SecondPart } from './components/SecondPart';
import {ThirdPart} from './components/ThirdPart'
import { FourtPart } from './components/ForthPart';
import { FifthPart } from './components/FifthPart';
import { EmailNotifyForm } from './components/Searchbar';
import { Footerend } from './components/Footer';

function App() {
  
  return (
    <>
      <Navbar/>
      <SecondPart/>
      <ThirdPart/>
      <FourtPart/>
      <FifthPart/>
      <EmailNotifyForm/>
      <Footerend/>
    </>

  )
}

export default App
