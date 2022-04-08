import React from 'react'

const UseState2 = () => {
 
  const myBiodata = [
    {
      id:1,
      myName:"Virat Kohali",
      myAge:33,
    },
    {
      id:2,
      myName:"Rohit sharma",
      myAge:34,
    },
    {
      id:3,
      myName:"Shikhar Dhawan",
      myAge:35,
    },
  ]

  const [array, setArray] = React.useState(myBiodata)


  const clearArray = () => {
    setArray([])

  }

  return (
    <div>
      {
        array.map((curElem) => {
          return (
            <h1>name: {curElem.myName} age: {curElem.myAge}</h1>
          )

        })
      }
      <button onClick={clearArray}>Clear</button>
    </div>
  )
}

export default UseState2