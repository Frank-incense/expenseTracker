import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Form from "./components/Form"
import Table from "./components/Table"
const EX = [
  {
    id: 0,
    expense:"Tea",
    detail:"Breakfast at School",
    category:"Breakfast",
    amount: "100",
    date: "04/13/2025",
  },
  {
    id: 1,
    expense:"Rent",
    detail:"Monthly Rent",
    category:"Rent",
    amount: "10,000",
    date: "04/13/2025",
  },
  {
    id: 2,
    expense:"Shopping",
    detail:"Monthly shopping",
    category:"Shopping",
    amount: "10,000",
    date: "04/13/2025",
  },
  {
    id: 3,
    expense:"MMF",
    detail:"Monthly MMF contribution",
    category:"Investment",
    amount: "10,000",
    date: "04/13/2025",
  }
]
function App() {
  const [expenses, setExpenses] = useState(EX)
  
  function handleSubmit(newExpense){
    setExpenses([...expenses,newExpense])
    
  }
  
  function handleSearch(search){
    const filteredExpense = EX.filter(expense=>{
      if(expense.expense.toLowerCase().includes(search.toLowerCase())) return true;
      // else return expense
    })
    setExpenses(filteredExpense)
  }
  
  return (
    <main>
      <Header/>
      <section className='row align-items-start'>
        <Form className="col" onFormSubmit={handleSubmit}/>
        <Table className="col" expenses={expenses} handleSearch={handleSearch}/>
      </section>   
    </ main>
  )
}

export default App
