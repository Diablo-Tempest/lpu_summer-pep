import { useState} from 'react'
// import { useEffect} from 'react'
import { useRef } from 'react';
/* useRef gives us a mutable box that stays the same between renders.
  It is useful for:
  1. accessing DOM elements
  2. storing values that should not cause re-renders.
  3. keeps track of something without updating UI
*/

import './App.css'
/* Virtual DOM working:
  1. React creates a virtual DOM tree
  2. When state or props change, React will make sa new Virtual DOM.
  3. It compares the old and new trees using a process called reconcillation
  4. It finds only the parts that changed
  5. Then it updates only those parts in the real DOM
*/
/* useEffect: It is a hook that is used to run side effects in our react app. It let's us run code after react renders a component.
It is helpful when:
1. calling an API
2. Setup a timer.
3. Adding event listeners
4. sync with browser features like localStorage, or document.title.
*/
function App() {
  // const inputRef = useRef(null);
  const imgRef = useRef();
  const imgChange = ()=>{
    if (imgRef.current.src == 'http://localhost:5173/favicon.svg'){
      imgRef.current.src = '/react.svg';
    }
    else{
      imgRef.current.src = 'http://localhost:5173/favicon.svg';
    }
  }
  // const focusInput = ()=>{
    // inputRef.current.focus();
    // console.log(inputRef.current.value);
    
  // }
  const [count, setCount] = useState(0)
  // useEffect(()=>{
    //code runs after render
  //   document.title = `Count: ${count}`;
  // }, [count])
  // let num = 0;
  // useEffect(()=>{
  //   let timer = setInterval(()=>{console.log(`Count: ${num++}`);
  //   }, 2000);
    //cleanup: if the effcct creates something that should be removed later, return a cleanup function.
    // return ()=>{
    //   clearInterval(timer)
    // }
  // }, [count])
  // [] means it will run only one after the first render.
  // [dependencies] it will run at first after the first render and then only run whenever the dependency is changing.
  // no dependency array: It will run at every render.
  return (
    <>
    {console.log("App is re-rendered")}
    <img ref={imgRef} src="/favicon.svg" alt="" height={300} />
    <button onClick={imgChange}>Change</button>
      {/* <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button> */}
         <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
    </>
  )
}

export default App
