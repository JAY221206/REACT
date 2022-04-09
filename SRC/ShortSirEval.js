import React from 'react'

const ShortSirEval = () => {
    const [demo, setdemo] = React.useState("Guys")
  return (
    <React.Fragment>
        <h1>{demo || 
        <>
        <h1>jayhind kumar</h1>
        </>
        }</h1>
        <h1>{demo && "Hello"}</h1>
    </React.Fragment>
  )
}

export default ShortSirEval