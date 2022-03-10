import React from 'react'

export default function DisplayAnswers({ans, i, checkAnswer}) {
  function handleCheck(){
    let result = checkAnswer(ans)
    if(result == "incorrect"){
      document.getElementById(`flag-${i}`).classList.toggle(result)
    } else if(result == "correct"){
      let idList = document.querySelectorAll('[id^="flag-"]')
      
      idList.forEach(ele => {
        if(ele.id != `flag-${i}`){
          if(ele.classList != "incorrect"){
          document.getElementById(ele.id).classList=("Answer incorrect")
          }
        } else {
          document.getElementById(`flag-${i}`).classList.toggle("correct")

        }
        console.log(`ele id = ${ele.classList}   flag-${i} `)
        })
        
          
        
      
      
    }

    

    
    // console.log)

  }
  
  
  return (
      
        <div 
          className="Answer"
          id= {`flag-${i}`}
          onClick={() => {handleCheck();}} 
          style={{cursor:"pointer"}}>
          
            {ans}
        </div>
    
    )
}
