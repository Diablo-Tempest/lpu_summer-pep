// import { useEffect, useState } from 'react'
/*useMemo: React hook that is used to memorize a value. It only recalculates if the depedency changes.
When to use it:
1. When the calculation is expensive
2. when we want to avoid doing the same work on every render.
*/
// import { useMemo } from 'react';

/* Context: It is built-in React feature that allows us to share data between components without passing props manually through entry level of the component tree.
useContext: is a react hook used to read data from context without passing though many layers.
*/
import './App.css'
import Navbar from './Components/Navbar'


// import Home from './Components/Home.jsx';
// import { ThemeContext } from './config/ThemeContext.jsx';
/* React router is also known as multi strategy router with three modes, which are
1. Declarative,
2. Data
3. Framework
StylesL
1. Declarative Routing
2. Data Routing

// Nested Routes: React Router supports nested child routes render inside the parent route's <Outlet />
*/
function App() {

  // const [count, setCount] = useState(0);
  // const [mode, setMode] = useState(false);

  // const slowFunction = (num) =>{
  //   console.log("Running a slow function");
  //   // eslint-disable-next-line no-empty
  //   for (let index = 0; index < 100000000; index++) {}
  //   return num * 2;
  // }
  // const result = useMemo(()=> slowFunction(count), [count])
  // const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   document.body.style.backgroundColor = theme === "light" ? "white" : "#222";
  //   document.body.style.color = theme === "light" ? "#222" : "white";
  //   document.body.style.transition = "0.3s ease-out"
  // }, [theme]);
  return (
    <>
    <Navbar />
      {/* <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme === 'light'? 'light' : 'dark'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam perferendis est quidem esse corrupti illo explicabo mollitia repellendus quo doloremque voluptate pariatur, labore u0nde beatae delectus. Ipsa, sequi perferendis!</div>
        <Home />
      </ThemeContext.Provider> */}
      {/* <h1>Result: {result}</h1> */}
      {/* <h1>Result: {slowFunction(count)}</h1> */}
      {/* <button onClick={()=>setCount(count+1)}>Click</button>
    <button onClick={()=>setMode(!mode)}>Toogle Theme</button> */}
  <h1>This is Main Page</h1>


    </>
  )
}

export default App
