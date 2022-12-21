import React, {useState} from 'react';
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import Logo from '../assets/logo4.png';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';


const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick= () => setNav(!nav);
	return(
		<div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-zinc-900 text-gray-300'>
			<div>
				<img src = {Logo} alt = "Logo Image" style = {{width: '200px'}}/>
			</div>
			<ul className = 'hidden md:flex'>
				<li>
					<Link to="home" smooth={true} duration={500}>
          			Home
        			</Link>
        		</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
          			About
        			</Link>
        		</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
          			Skills
        			</Link>
        		</li>
				<li>
					<Link to="experience" smooth={true} duration={500}>
          			Experience
        			</Link>
        		</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
          			Contact
        			</Link>
        		</li>
			</ul>


			{/*Hamburger*/}
			<div onClick ={handleClick} className = 'md:hidden z-10'>
				{!nav ? <FaBars/> : <FaTimes/>}
			</div>

			{/*mobile menu*/}
			<ul className = {!nav ? 'hidden' : 'absolute bg-[#000000] top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
				<li className = 'py-6 text-4xl'>
					<Link onClick = {handleClick} to="home" smooth={true} duration={500}>
          			Home
        			</Link>
				</li>
				<li className = 'py-6 text-4xl'>
					<Link onClick = {handleClick} to="about" smooth={true} duration={500}>
          			About
        			</Link>
        		</li>
				<li className = 'py-6 text-4xl'>
					<Link onClick = {handleClick} to="skills" smooth={true} duration={500}>
          			Skills
        			</Link>
				</li>
				<li className = 'py-6 text-4xl'>
					<Link onClick = {handleClick} to="experience" smooth={true} duration={500}>
          			Experience
        			</Link>
        		</li>
				<li className = 'py-6 text-4xl'>
					<Link onClick = {handleClick} to="contact" smooth={true} duration={500}>
          			Contact
        			</Link>
        		</li>
			</ul>

			<div className = 'hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-75px] hover:ml-[0px] duration-200 bg-[#a2c4c9]'>
						<a href = 'https://github.com/David-Grim' className = 'flex justify-between items-center w-full text-black'>
							GitHub <FaGithub size = {30}/>
						</a>
					</li>
					<li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-75px] hover:ml-[0px] duration-200 bg-blue-600'>
						<a href = 'https://www.linkedin.com/in/david-grim-83304b1b7/' className = 'flex justify-between items-center w-full text-black'>
							LinkedIn <FaLinkedin size = {30}/>
						</a>
					</li>

				</ul>
			</div>
		</div>
	)
}

export default Navbar;