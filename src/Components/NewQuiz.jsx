import React, { useState } from 'react'

const NewQuiz = ({propsSending}) => {
    console.log(propsSending)
    const [currentIndex,setCurrentIndex] = useState(0)
    const [select,setSelect] = useState(null)

    const handleChange = (e)=>{
        setSelect(e.target.value)
    }
    const handleClick = () =>{
        console.log(select)
    }
  return (
    <>
    <div>
        <h1 style={{textAlign:"center"}}>QuizApp</h1>
        <h1>{currentIndex+1}. {propsSending[currentIndex].Question}</h1>
       <ul>
        {propsSending[currentIndex].Options.map((optio,i)=>(
            <div key={i}>
              <input type='radio' value={optio} name={currentIndex} checked={select===optio} onChange={handleChange}/>
              {optio}
            </div>
        ))}
       </ul>
        </div>
    <button onClick={handleClick}>Submit</button>
    <button>Next</button>
    </>
  )
}

export default NewQuiz