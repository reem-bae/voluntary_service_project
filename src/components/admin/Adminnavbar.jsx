
   import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { 
    faChartPie, 
    faFolderOpen, 
    faUsers, 
    faHandHoldingHeart, 
    faUserGroup, 
    faRightFromBracket 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Adminnavbar() {
    const { logout } = useAuth();
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
        <div className="w-full h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-50">
            <div className="shrink-0">
                <p className="bg-gray-900 text-white px-4 py-2 rounded-xl font-black text-lg tracking-tighter">
                    HOPE <span className="text-orange-500">ADMIN</span>
                </p>
            </div>
            <nav className="hidden lg:flex items-center gap-2">
                <NavLink to="/admin/dashboard" className={navLinkClass}>
                    <FontAwesomeIcon icon={faChartPie} />
                    <span>Dashboard</span>
                </NavLink>
                
                <NavLink to="/admin/projects" className={navLinkClass}>
                    <FontAwesomeIcon icon={faFolderOpen} />
                    <span>Projects</span>
                </NavLink>
                
                <NavLink to="/admin/volunteer" className={navLinkClass}>
                    <FontAwesomeIcon icon={faUsers} />
                    <span>Volunteers</span>
                </NavLink>
                
                <NavLink to="/admin/donation" className={navLinkClass}>
                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                    <span>Donations</span>
                </NavLink>
                
                <NavLink to="/admin/users" className={navLinkClass}>
                    <FontAwesomeIcon icon={faUserGroup} />
                    <span>Users</span>
                </NavLink>
            </nav>
            <div className="flex items-center">
                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-colors group text-sm"
                >
                    <span>Logout</span>
                    <FontAwesomeIcon icon={faRightFromBracket} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}