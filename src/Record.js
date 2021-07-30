import React from 'react'
import './Record.css'
function Record() {
    return (
        <div className='record'>
           <table className='record__table'>
               <tr>
                   <th className='win'>Win</th>
                   <th className='lose'>Lose</th>
                   <th className='draw'>Draw</th>
               </tr>
               <tr>
               <td className='win'>0</td>
                <td className='lose'>0</td>
                <td className='draw'>0</td>  
               </tr>
               
               </table> 
        </div>
    )
}

export default Record
