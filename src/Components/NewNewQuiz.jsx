import React, { useState } from 'react';

const NewNewQuiz = ({ propsSending }) => {
    console.log(propsSending);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectOption, setSelectOption] = useState(null)
  const [score, setScore] = useState(0)
  const [next, setNext] = useState(false)
  const [Submit, setSubmit] = useState(true)
  const handleAnswer = () => {

    if (propsSending[currentIndex].answer == selectOption) {
      console.log("correct")
      setScore(score + 1)

    }
    setNext(true)
    setSubmit(false)
  }
  const handleNext = () => {
    if (currentIndex < propsSending.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectOption(null)

      setNext(false)
      setSubmit(true)

    } else {
      alert("end question")
     
    }
  }
  const handleClick = (event) => {
    setSelectOption(event.target.value)

  }

  return (
    <div>

      <div >
        <h3>{propsSending[currentIndex].Question}</h3>

        <ul>
          {propsSending[currentIndex].Options.map((item, i) => (
            <div key={i}>
              <input type="radio"
                name={currentIndex}
                value={item}
                checked={selectOption === item}
                onChange={handleClick}
              />
              {item}
            </div>
          ))}

        </ul>

      </div>
      
      {currentIndex === propsSending.length-1 && (
      <div>
        <p>Quiz completed! Your score is: {score}</p>
      </div>
    )}
      <button onClick={handleAnswer} disabled={Submit !== true ? true : false}
      >Submit</button>
      <button disabled=
        {next !== true ? true : false}

        onClick={handleNext}
      >
        Next
      </button>


    </div>
  );
};

export default NewNewQuiz;