import React from 'react'

import '../css/displayTransaction.css'

function DisplayTransaction (props) {
    return (
        <div>
          {props.list.map ((item) =>(
            <div>
                {item.transactionType == "Expense" ? ( <div className="transaction-item">
                    <div>
                        <h4 style={{paddingLeft: "12px" ,  paddingTop:"25px"}}>
                            {item.amount}
                            </h4>
                    </div>
                    <div>
                        <h4 style={{paddingLeft:"290px" , paddingTop:"25px"}}>
                            {item.item}
                            </h4>
                    </div>
                    <div className='Expense-line'></div>

                    </div>
                    ):(
                         <div className="transaction-item">
                         <div>
                             <h4 style={{paddingLeft: "12px" ,  paddingTop:"25px"}}>
                                 {item.amount}
                                 </h4>
                         </div>
                         <div>
                             <h4 style={{paddingLeft:"290px" , paddingTop:"25px"}}>
                                 {item.item}
                                 </h4>

                         </div>
                         <div className='Income-line'></div>

                         </div>
                    )}
               
                </div>

          ))}
        </div>

    );
}
export { DisplayTransaction};