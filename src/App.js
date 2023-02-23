import { useState } from "react"
const App = () => {
 const [counter, setCounter] = useState(0)
  return (
    <div style ={{width: '100%', height: '100%'}}>
    <div style ={{fontSize: "25pt", textAlign: 'center'}}>
    <h1>{counter}</h1>
    <button style ={{fontSize: "25pt"}} onClick={()=> setCounter(counter + 1)}>+</button>
   <button style ={{fontSize: "25pt"}} onClick={()=> setCounter(0)}>reset</button>
   <button style ={{ fontSize: "25pt"}} onClick={()=> setCounter(counter - 1)}>-</button>
   
    </div>
    </div>
  )
  
}

export default App