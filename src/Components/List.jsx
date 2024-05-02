import React from 'react'

const List = ({propsSending}) => {
    console.log(propsSending)
  return (
    <>
    <ul>
        {propsSending.map((item,i)=>(
            <li key={i}>
                <h1>{`Question-${i+1} ${item.Question}`}</h1>
                <ul>
                    {item.Options.map((values,index)=>(
                        <div key={index}>
                            <input type='radio' name={i} value={values}/>
                            {values}
                        </div>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
    <button>Submit</button>
    <button>Next</button>
    </>
  )
}

export default List