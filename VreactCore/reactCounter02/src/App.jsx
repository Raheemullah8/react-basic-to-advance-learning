import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    setcounter(counter + 1)
    setcounter(preCounter => preCounter+ 1 )
    setcounter(preCounter => preCounter+ 1 )
    setcounter(preCounter => preCounter+ 1 )
    setcounter(preCounter => preCounter+ 1 )
    setcounter(preCounter => preCounter+ 1 )
  };
  const removeValue = () =>{
        setcounter(counter - 1)
  }
  return (
    <>
      <h1>User Counter:</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={removeValue}>--Dec</button>
      <br />
      <button onClick={addValue}>INC++</button>
    </>
  );
}

export default App;
