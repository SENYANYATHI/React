import React,{useState} from "react"

import "../css/Add.css"
function Additem (props) {
    const [amount, setAmount] = useState('')
    const [item, setItem] = useState("");
    const [transactionType, settransactionType] = useState("");


const add =(()=>{
 
props.add(amount, item ,transactionType) ;
})


    return (
        <div>
            <h1 style={{paddingTop:"5px"}}>Add transaction</h1>
<input placeholder="enter item" onChange={(e)=> setItem(e.target.value)}
/>{""}
 <br></br>
<input placeholder="enter amount" onChange={(e)=> setAmount(e.target.value)}
/>{""}
<br></br>

<select onChange={(e)=> settransactionType(e.target.value)}>
<option value="Income">Income</option>
<option value="Expense">Expense</option>
</select><br></br>
<br></br>
<button id="butn" onClick={add}>Add</button>
</div>
    );
}
export default Additem;