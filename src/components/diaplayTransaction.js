import React from 'react'

import '../css/displayTransaction.css'

function DisplayTransaction (props) {
    return (
        <div>
            {props.list.map((item) =>(

                <div>
                    <div className="transaction-item">
                        <div>
                            <h4>{item.amount}</h4>
                        </div>

                        <div>
                        <h4>{item.item}</h4>

                        </div>
                        
                        </div>
                    </div>
            ))}
        </div>
    );
}
export {DisplayTransaction}