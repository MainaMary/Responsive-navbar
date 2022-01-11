import React ,{useState} from 'react'
import {Link} from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)

    const handleClick = () =>{
        setIsMobile(prevState => !prevState)
    }
    return (
        <nav className='navbar'>
        <h2 className='logo'>Blockchain</h2>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
            <li>
                <Link to="/" className='home'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='home'>About</Link>
            </li>
          
            <li>
                <Link to="/skills" className='home'>skills</Link>
            </li>
            <li>
                <Link to="/signup" className='home sign-up'>sign up</Link>
            </li>
        </ul>
        <div className='mobile-icon' onClick={handleClick}>
       {isMobile ? <FaTimes/> : <FaBars/>}
        </div>
        </nav>
            
    
    )
}

export default Navbar
