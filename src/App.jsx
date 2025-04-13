import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Form from "./components/Form"
import Table from "./components/Table"

function App() {
  const [expenses, setExpenses] = useState([])
  
  function handleSubmit(newExpense){
    setExpenses([...expenses,newExpense])
    
  }
  console.log(expenses)
  return (
    <main>
      <Header/>
      <section className='row align-items-start'>
        <Form className="col" onFormSubmit={handleSubmit}/>
        <Table className="col" expenses={expenses}/>
      </section>
      
      
    </ main>
  )
}

export default App
