import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

import Home from './components/homepage'
import {BrowserRouter as router , Switch, route} from 'react-router-dom'

function App() {

  const [transaction,setTransaction] = useState ([]);

  const addTransaction= ((amount,transaction, transactionType) =>{

   setTransaction((item)=> [...item,{
    amount:amount,
    item:transaction,
    transactionType:transactionType

   }])

    console.log(transaction);
  })
  return (
    <div className="Container">
  <Home list={transaction} add={addTransaction}/>
   

    </div>
  );
}

export default App;
