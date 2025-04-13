import {useState} from "react";
import './Form.css'

function Form({onFormSubmit}){
    let id = 0 
    const [formdata, setformdata] = useState({
        id: id,
        expense:"",
        detail:"",
        category:"",
        amount: "",
        date: "",
      });
      function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setformdata({
            ...formdata,
            [name]:value
        })
      }
      function handleFormSubmit(e){
        e.preventDefault()
        onFormSubmit(formdata)
        id += 1;
        setformdata({
            id: id,
            expense:"",
            detail:"",
            category:"",
            amount: "",
            date: "",
          })
      }
      
      
    return(
    <>
    <form onSubmit={handleFormSubmit}>
        <div>
            <h2>Add Expense</h2>
            <p>Input your expense details bellow</p>
        </div>
        <div className="formelement">
            <input 
            type="text" 
            name="expense" 
            id="expense" 
            placeholder="Enter an Expense"
            value={formdata.expense}
            onChange={handleChange}/>
            
        </div>
        <div className="formelement">
            <input 
            type="text" 
            name="detail" 
            id="detail" 
            placeholder="Enter a Description"
            value={formdata.detail}
            onChange={handleChange}/>
            
        </div>
        <div className="formelement">
            <input 
            type="text" 
            name="category" 
            id="category" 
            placeholder="Enter a Category"
            value={formdata.category}
            onChange={handleChange}/>
            
        </div>
        <div className="formelement">
            <input 
            type="number" 
            name="amount" 
            id="amount" 
            placeholder="Enter Amount"
            value={formdata.amount}
            onChange={handleChange}
            />
        </div>
            
        <div className="formelement">
            <input 
            type="date" 
            name="date" 
            id="date" 
            placeholder=""
            value={formdata.date}
            onChange={handleChange}/>
        </div>
        <div className="formelement">
            <input 
            type="submit" 
            value="Add Expense"/>
        </div>
    </form>
    </>
)
}

export default Form;