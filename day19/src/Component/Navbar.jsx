const Navbar = (props) => {
  return (
    <nav>
      <ul className=" ulNav">
        <span className="text-xl text-white font-bold">
        <li>Welcome Back, {props.name}</li>
        </span>
        <span className="flex justify-center items-center">
        <li className="navItems">Home</li>
        <li className="navItems">About</li>
        <li className="navItems">Contact</li>
        <li className="navItems">Careers</li>
        <li className="navItems">Products</li>
        </span>
      </ul>
    </nav>
  )
}

export default Navbar
