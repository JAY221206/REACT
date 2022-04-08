import React from 'react'

const UseState = () => {
  const [data, setData] = React.useState("sanju samson")


  const changeData = () => {
    if(data == "sanju samson")
    {
      setData("rishabh pant")
    }
    else
    {
      setData("sanju samson")
    }
   
    console.log("rishabh pant")
  }

  return (
    <div>
    <h1>{data}</h1>
    <button onClick={changeData}>Click</button>
    </div>
  )
}

export default UseState