import React, {useState, useEffect} from 'react'

const UseEffectClean = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)

    const actualWidth = () => {
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)

    }

    useEffect(() => {
        console.log("add event")
        window.addEventListener("resize", actualWidth)

        return () => {
            console.log("remove event")
            window.removeEventListener("resize", actualWidth)

        }
      
    })
    

  return (
    <div>
        <p>the actual size of window</p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffectClean