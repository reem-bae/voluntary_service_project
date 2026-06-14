

import { NavLink, useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { 
 
    faWalking, 
    faHandHoldingHeart, 
    faUserCircle, 
    faSignOutAlt, 
    faTable,
    faHeart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Usernavbar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) => `
    flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all duration-300 text-sm
    ${isActive 
        ? "bg-orange-600 text-white shadow-md shadow-orange-100" 
        : "text-gray-500 hover:bg-gray-50 hover:text-orange-600"}
  `;

  return (
    <div className="w-full h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-12 sticky top-0 z-50">

      <div className="flex items-center gap-4">
        <Link to="/User" className="bg-gray-900 text-white px-4 py-2 rounded-xl font-black text-lg tracking-tighter">
            HOPE <span className="text-orange-500">USER</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-2">
        <NavLink to="/User" end className={navLinkClass}>
          <FontAwesomeIcon icon={faTable} className="text-xs" />
          Dashboard
        </NavLink>
        <NavLink to="/User/activity" className={navLinkClass}>
          <FontAwesomeIcon icon={faWalking} className="text-xs" />
          My Activities
        </NavLink>
        <NavLink to="/User/donation" className={navLinkClass}>
          <FontAwesomeIcon icon={faHandHoldingHeart} className="text-xs" />
          My Donations
        </NavLink>
        <NavLink to="/User/userprofile" className={navLinkClass}>
          <FontAwesomeIcon icon={faUserCircle} className="text-xs" />
          Profile
        </NavLink>
        <NavLink to="/User/donate" className={navLinkClass}>
        <FontAwesomeIcon icon={faHeart} />
        Donate</NavLink>
      </nav>

      <div className="flex items-center gap-6">
        <div className="hidden lg:block text-right">
          <h3 className="text-sm font-black text-gray-900 leading-none">{user?.name || "Guest User"}</h3>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{user?.email}</p>
        </div>
        
        <div className="h-10 w-px bg-gray-100 hidden lg:block"></div>

        <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all group"
        >
            <span>Logout</span>
            <FontAwesomeIcon icon={faSignOutAlt} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}