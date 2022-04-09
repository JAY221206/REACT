import React from 'react'

const UseStateArray = () => {
    const myBioData = [
        {
            id:0, myName:"Samson", myAge:24,
        },
        {
            id:1, myName:"Rohit", myAge:33,
        },
        {
            id:2, myName:"Dhawan", myAge:35,
        },
    ]
    const [myArray, setMyArray] = React.useState(myBioData)

    const clearArray = () => {
        setMyArray([])
        console.log(myBioData)
        
    }

    const removeElem = (id) => {
        // alert(id);
        const myNewArray = myArray.filter((curElem) => {
            return curElem.id !== id;
        })
        setMyArray(myNewArray);

    }

  return (
    <div>
        {
            myArray.map((curElem) => {
                return (
                    <h1 key={curElem.id}>name: {curElem.myName} age: {curElem.myAge}
                    <button onClick={() => removeElem(curElem.id)}>Remove</button>
                    </h1>
                )
            })
        }
        <button onClick={clearArray}>Clear</button>
    </div>
  )
}

export default UseStateArray