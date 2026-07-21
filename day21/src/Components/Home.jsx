// import { useContext } from "react";
// import { ThemeContext } from "../config/ThemeContext";

import Navbar from "./Navbar";

function Home(){
    // eslint-disable-next-line no-undef
    // const { theme, setTheme } = useContext(ThemeContext);
    // return(
    //     <button onClick={()=>setTheme(theme === 'light'? "dark": "light")}>Toggle Theme</button>
    // )
    <>
    <Navbar />
    <h1>This is Home Page</h1>
    </>
}
export default Home;