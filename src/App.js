
import './App.css';
import Button from './Button';
import Container from './Container';
import Record from './Record';
import Heading from './Heading';
import { createContext, useState } from 'react';
export const ScoreContext=createContext();
function App() {

  const [yourScore,setYourScore]= useState(0);
  const [yourCards,setYourCards]= useState([]);
  const [dealerCards,setDealerCards]= useState([]);
  const [dealerScore,setDealerScore]= useState(0);
  const initial= new Array(3).fill(0);
  const [record,setRecord]=useState(initial);
 
  return (
    <div className="App">
   
      <Heading/>
      {console.log(yourScore, dealerScore)}
      <ScoreContext.Provider  value={ {yours:[ yourScore, setYourScore], dealers: [dealerScore ,setDealerScore],
         yourCard: [yourCards,setYourCards], dealerCard:[dealerCards,setDealerCards], records: [record,setRecord]}}>
   <Container/>
   <Button/>
   <Record/>
   </ScoreContext.Provider>
   
   
   
    </div>
  );
}

export default App;
