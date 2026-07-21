import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
      <ul className="ulDesign">
        <NavLink className={({isActive})=>
          isActive ? "activeChange itemDesign": "itemDesign"
        } to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => 
          isActive ? "activeChange itemDesign" : "itemDesign"
        } to={'/contact'}>Contact</NavLink>
        <NavLink className={({ isActive }) => 
          isActive ? "activeChange itemDesign" : "itemDesign"
        } to={'/about'}>About</NavLink>
        <NavLink className={({ isActive }) => 
          isActive ? "activeChange itemDesign" : "itemDesign"
        } to={'/products'}>Products</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
