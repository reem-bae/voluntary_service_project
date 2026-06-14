

    import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    const [open, setopen] = useState(false);

    const navStyles = ({ isActive }) => 
        `transition-colors duration-300 ${isActive ? "text-orange-600 font-semibold" : "text-gray-600 hover:text-orange-500"}`;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-[5%] py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div>
                    <span className="font-bold text-xl tracking-tight">HopeForAll</span>
                </Link>

                <div className="hidden md:flex space-x-8 items-center">
                    <NavLink to="/" className={navStyles}>Home</NavLink>
                    <NavLink to="/about" className={navStyles}>About</NavLink>
                    <NavLink to="/projects" className={navStyles}>Projects</NavLink>
                    <NavLink to="/volunteer" className={navStyles}>Volunteer</NavLink>
                    <NavLink to="/donate" className={navStyles}>Donate</NavLink>
                    <NavLink to="/contact" className={navStyles}>Contact</NavLink>
                </div>

                <div className="flex gap-4 items-center">
                    <Link to="/login" className="hidden sm:block text-gray-700 hover:text-orange-600 font-medium">Login</Link> 
                    <Link to="/register">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full transition-all transform hover:shadow-lg active:scale-95 text-sm font-semibold">
                            Join Us
                        </button>
                    </Link>
                    
                    <button className="md:hidden text-2xl text-gray-700" onClick={() => setopen(!open)}>
                        <FontAwesomeIcon icon={open ? faXmark : faBars} />
                    </button>
                </div>
            </div>
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl p-5 flex flex-col gap-4 animate-fadeIn">
                    <NavLink to="/" onClick={() => setopen(false)} className={navStyles}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setopen(false)} className={navStyles}>About</NavLink>
                    <NavLink to="/projects" onClick={() => setopen(false)} className={navStyles}>Projects</NavLink>
                    <NavLink to="/volunteer" onClick={() => setopen(false)} className={navStyles}>Volunteer</NavLink>
                    <NavLink to="/donate" onClick={() => setopen(false)} className={navStyles}>Donate</NavLink>
                    <Link to="/login" className="text-orange-600 font-bold">Login</Link>
                </div>
            )}
        </nav>
    );
}
