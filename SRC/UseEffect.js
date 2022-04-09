import React, {useEffect, useState} from 'react'

const UseEffect = () => {
 const [count, setCount] = useState(0)

  useEffect(() => {
    if(count >= 1)
    {
      document.title = `chats (${count})`
    }
    else
    {
      document.title = `chats`
    }
    
   console.log("i am first")
    
  },[count])

  useEffect(() => {
    console.log("i am fine")

  

  }, [])
  


  const actualWidth = () => {
    setCount(count + 1)
  }
 
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={actualWidth}>Click</button>
    </div>
  )
}

export default UseEffect