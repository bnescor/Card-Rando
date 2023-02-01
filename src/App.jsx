import { useState } from "react"
import QuoteBox from "./Components/QuoteBox"
function App() {
  const functionRandocolor = () => {
    const R = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const RGB = `rgb(${R},${G},${B})`
    return RGB
}
  const [NewColor, setNewColor] = useState(functionRandocolor())

  return (
    <div className="App" style={{backgroundColor:`${NewColor}`}}>
      <QuoteBox 
      NewColor={NewColor}
      setNewColor={setNewColor}
      functionRandocolor={functionRandocolor()}/>
    </div>
  )
}

export default App
