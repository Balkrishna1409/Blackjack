import React, { useContext } from 'react'
import { ScoreContext } from './App'
import './Record.css'
function Record() {
   const {records }= useContext(ScoreContext);
   const [record,setRecord]=records;
    return (
        <div className='record'>
           <table className='record__table'>
               <tr>
                   <th className='win'>Win</th>
                   <th className='lose'>Lose</th>
                   <th className='draw'>Draw</th>
               </tr>
               <tr>
               <td className='win'>{record[0]}</td>
                <td className='lose'>{record[1]}</td>
                <td className='draw'>{record[2]}</td>  
               </tr>
               
               </table> 
        </div>
    )
}

export default Record
