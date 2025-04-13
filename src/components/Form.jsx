import React from "react";
import './Form.css'

function Form(){
    return(
    <>
    <form>
        <div>
            <h2>Add Expense</h2>
            <p>Input your expense details bellow</p>
        </div>
        <div className="formelement">
            <input type="text" name="expense" id="expense" placeholder="Enter an Expense"/>
        </div>
        <div className="formelement">
            <input type="text" name="delail" id="detail" placeholder="Enter a Description"/>
        </div>
        <div className="formelement">
            <input type="text" name="category" id="category" placeholder="Enter a Category"/>
        </div>
        <div className="formelement">
            <input type="number" name="amount" id="amount" placeholder="Enter Amount"/>
        </div>
        <div className="formelement">
            <input type="date" name="date" id="date" placeholder=""/>
        </div>
        <div className="formelement">
            <input type="submit" value="Add Expense"/>
        </div>
    </form>
    </>
)
}

export default Form;