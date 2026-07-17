import { useState } from 'react'
// import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  /*
    useRef gives us a mutable box that stays the same between renders
    It is useful for:
    1. Accessing the DOM
    2. Storing values that should not cause re-render.
    3. keep track of something without updating the UI.
  */
  const inputRef = useRef(null);
  const focusInput = ()=>{
    console.log(inputRef.current.value);
    
  }
  /* useEffect let's us run code after React renders a component. It is responsible for creating side-effects in our app.
  Side-effects:
  1. Calling an API
  2. setting timer
  3. adding event listeners
  sync with browser features like localStorage or document.title
  
  */

  // useEffect(()=>{
  //   document.title = `Count: ${count}`;
  // }, [count])
  // let num = 0;
  // useEffect(()=>{

  //   //cleanup function: If our effect creates something that should be removed later, return a cleanup function.
  //   const timer = setInterval(() => {
  //     console.log(`Number: ${num++}`);
  //   }, 1000);
  //   return ()=>{ clearInterval(timer);
  //   }
  // },)
  /*
  Dependency Array:
  1. [] - run once after the first render
  2. [dependency] - run when the dependency value changes
  3. No dependency array: run after every render
  */
/*
  Virtual DOM steps:
  1. React creates a Virtual DOM
  2. When states or props change, React makes a new Virtual DOM.
  3. It compares the old and new tree using a process called reconcillation.
  4. Then it updates only those parts in the real DOM.
*/
/*
Reconcillation: It is the entire process React uses to update the UI.
Diffing: Comparing old and new virtual DOMs. It is one step inside reconcillation where React compares two virtual DOMS.

function Counter(){
  const [count, setCount] = useState(0);
  return{
    <>
      <div>{count}</div>

    </div>
    <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>Count</button>
  }
}

1. State will change
2. Create a new Virtual DOM
old virtusl DOM:
  <div>
    <h1>0</h1>
    <button>Increment</button>
  </div>
  New Virtual DOM
    <h1>1</h1>
    <button>Increment</button>
  </div>
3. Diffing
<div> - same
<button> - same
<h1> text changes from 0 to 1
This comparision is called diffing

4. Updating The Real DOM
<h1>1</h1>
This complete reconcillation

  Visual Flow:

  State Changes
      |
  Create new Virtusl DOM
      |
  Driffing (compares old vs new)
      |
  Update Real DOM
      |
  Reconcillation Complete

*/

  return (
    <>
      {console.log("App is re-rendered")
      }
        <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Click</button>
    </>
  )
}

export default App
