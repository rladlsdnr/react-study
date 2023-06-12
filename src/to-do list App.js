import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [todo, setT] = useState("")
  const [list, setL] = useState([])
  const onChg = (event) => setT(event.target.value)
  const onSbm = (event) => {
    event.preventDefault()
    if(todo === ""){
      return
    }
    setT("")
    setL(cur => [...cur, todo])
  }
  return (
    <div>
      <h1>My to-do list ({list.length})</h1>
      <form onSubmit={onSbm}>
        <input onChange={onChg} value={todo} type="text" placeholder="Write your to-do list" />
        <button>Add to-do</button>
      </form>
      <hr />
      {list.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  )
}

export default App;
