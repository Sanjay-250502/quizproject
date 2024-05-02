import React, { useState } from 'react'
import Data from "../Quiz.json"
import NewNewQuiz from './NewNewQuiz'
// import List from './List'
// import NewQuiz from './NewQuiz'
const Quiz = () => {
    const [myProducts] = useState(Data.data)
    // console.log(myProducts)
  return (
    <>
    {/* <List propsSending={myProducts}/> */}
    {/* <NewQuiz propsSending={myProducts}/> */}
    <NewNewQuiz propsSending={myProducts}/>
    </>
  )
}

export default Quiz