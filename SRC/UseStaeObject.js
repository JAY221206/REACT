import React from 'react'

const UseStaeObject = () => {
  const [myObject, setMyObject] = React.useState({
    myName:"aman", myAge:33, degree:"intermediate"
  })


  const changeObject = () => {
    setMyObject({...myObject, myName:"abhishek", myAge:23})
  }

  return (
    <div>
    <h1>name: {myObject.myName} age: {myObject.myAge} degree: {myObject.degree}</h1>
    <button onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStaeObject;