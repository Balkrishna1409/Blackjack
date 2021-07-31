import React, { useContext, useState, useEffect } from 'react';
import './Button.css';
import { ScoreContext } from './App';
function Button() {
    const {yours, dealers, yourCard, dealerCard,records} =useContext(ScoreContext);
    const [yourScore,setYourScore]= yours;
    const [yourCards,setYourCards]= yourCard;
    const [dealerCards,setDealerCards]= dealerCard;
    const [dealerScore,setDealerScore]= dealers;
    const [isStand,setIsStand]=useState(true);
    const [countAttempt,setCountAttempt]=useState(0);
    const [record,setRecord]=records;
    
    const dealclick=()=>
    {
        setYourScore(0);
        setYourCards([]);
        setDealerCards([]);
        setDealerScore(0);
        setIsStand(true);
        setCountAttempt(0)
    }
    const standclick = ()=>
    {
        setCountAttempt(0);
        setIsStand(!isStand); 
  
    }
    const hitclick = ()=>
    { 
        if(countAttempt<3)
        {
        const x =Math.floor(Math.random()*11)+1;
        if(isStand)
        {
            setYourScore(yourScore+x);
            setYourCards([...yourCards,x]);
            setCountAttempt(countAttempt+1)
        }
    }

    }
    const dealerclick = ()=>
    {
        if(countAttempt<3)
        {
        const x =Math.floor(Math.random()*11)+1;
        
            setDealerScore(dealerScore+x);
            setDealerCards([...dealerCards,x]);
            setCountAttempt(countAttempt+1);
        
        }
}
   

useEffect(() => {
  if(countAttempt===3 || countAttempt===2)
  {
        if(yourScore>21)
        {
        alert('you are busted..dealer won');
        let str=Array.from(record)
                
        str[1]+=1;
        setRecord(str); 
       setYourScore(0);
        setYourCards([]);
        setDealerCards([]);
        setDealerScore(0);
        setIsStand(true);
        setCountAttempt(0)
        
        }
       else if(dealerScore>21)
        {
            
                alert('Dealer you are busted ..you won');
                let str=Array.from(record)
                
                str[0]+=1;
                setRecord(str); 
                setYourScore(0);
        setYourCards([]);
        setDealerCards([]);
        setDealerScore(0);
        setIsStand(true);
        setCountAttempt(0)
                
        }
       else if(yourScore>dealerScore && dealerScore!==0 && countAttempt===3)
        {
            alert('you won');
            let str=Array.from(record)
                
            str[0]+=1;
            setRecord(str); 
       setYourScore(0);
        setYourCards([]);
        setDealerCards([]);
        setDealerScore(0);
        setIsStand(true);
        setCountAttempt(0)
        }
       else if(yourScore<dealerScore && dealerScore!==0)
        {
            alert('Dealer won');
            let str=Array.from(record)
                
            if(str[1]==='undefined')
            {
                str[1]=0;
            } 
             str[1]+=1;
            setRecord(str); 
       setYourScore(0);
        setYourCards([]);
        setDealerCards([]);
        setDealerScore(0);
        setIsStand(true);
        setCountAttempt(0)
        }
       else if(yourScore===dealerScore && dealerScore!==0)
        {
            alert('match draw');
            let str=Array.from(record)
                
                str[2]+=1;
                setRecord(str); 
            setYourScore(0);
        setYourCards([]);
        setDealerCards([]);
        setDealerScore(0);
        setIsStand(true);
        setCountAttempt(0)
        }

    }
        

    }, [yourScore, isStand, dealerScore, countAttempt, record,
        setRecord, setDealerCards,setDealerScore,setYourCards,setYourScore])

    return (
        <>
        <div className="button__container">
      <button className='hit' onClick={hitclick}>HIT</button>
      <button className='stand' onClick={standclick}>STAND</button>
      <button className='deal' onClick={dealclick}> DEAL</button>
      <button className='deal  dealer' onClick={dealerclick}> DEALER</button>
    </div>     
        </>
    )
}

export default Button;
