import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Form from "./components/Form"
import Table from "./components/Table"

function App() {
  return (
    <main>
      <Header/>
      <section className='row align-items-start'>
        <Form className="col"/>
        <Table className="col"/>
      </section>
      
      
    </ main>
  )
}

export default App
