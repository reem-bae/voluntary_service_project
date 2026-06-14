

    import { Link } from "react-router-dom"
import { 
    faFolderPlus, 
    faUserCheck, 
    faHandHoldingDollar, 
    faUsersGear,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const content = [
    {
        action: "Manage Projects",
        icon: faFolderPlus,
        path: "/admin/projects",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        action: "Approve Volunteers",
        icon: faUserCheck,
        path: "/admin/volunteer",
        color: "text-green-600",
        bg: "bg-green-50"
    },
    {
        action: "View Donations",
        icon: faHandHoldingDollar,
        path: "/admin/donation",
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        action: "Manage Users",
        icon: faUsersGear,
        path: "/admin/users",
        color: "text-purple-600",
        bg: "bg-purple-50"
    }
]

export default function Quicklink() {

    return (
        <div className="w-full py-6">
            <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-gray-300"></span>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                    Quick Actions
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.map((cont, index) => (
                    <Link key={index} to={cont.path} className="group">
                        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                        
                                <div className={`w-12 h-12 rounded-xl ${cont.bg} ${cont.color} flex items-center justify-center text-lg group-hover:scale-110 transition-transform`}>
                                    <FontAwesomeIcon icon={cont.icon} />
                                </div>
                                
                                <span className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                                    {cont.action}
                                </span>
                            </div>

                            <div className="text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all">
                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}