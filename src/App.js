import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Additem  from './components/additem';

function App() {

  const [transaction,setTransaction] = useState ([]);

  const addTransaction = ((amount, item , transactionType)=>{

    setTransaction ((item)=> [...item, {
      amount:amount,
      item:item,
      transactionType:transactionType,
    }])

    console.log(transaction);
  })
  return (
    <div className="Container">
   <DisplayTransaction list ={transaction}/>
   <Additem add={addTransaction} />
   

    </div>
  );
}

export default App;
