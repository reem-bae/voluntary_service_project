
    import { useState, useEffect } from "react"; // Added hooks
import useAuth from "../../hooks/useAuth";
import { faEnvelope, faCalendarAlt, faCamera, faHeart, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Userprofile() {
    const { user } = useAuth();
    

    const [counts, setCounts] = useState({
        donations: 0,
        activities: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileStats = async () => {
            try {
                const token = localStorage.getItem("token");
                const headers = { "Authorization": `Bearer ${token}` };

                const volRes = await fetch("http://localhost:5000/api/volunteer/my-application", { headers });
                const volData = await volRes.json();

   
                const donRes = await fetch("http://localhost:5000/api/user/my/donations", { headers });
                const donData = await donRes.json();

                setCounts({
                    activities: Array.isArray(volData) ? volData.length : 0,
                   
                    donations: donData.donationsCount ? donData.donationsCount.length : 0
                });
            } catch (error) {
                console.error("Error fetching profile stats:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) fetchProfileStats();
    }, [user]);

    return (
        <div className="min-h-screen bg-[#fcfcfd] p-4 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
                    <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                    
                    <div className="px-8 pb-8">
                        <div className="relative flex flex-col md:flex-row md:items-end -mt-16 mb-8 gap-6">
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-[2rem] bg-gray-200 border-4 border-white overflow-hidden shadow-lg">
                                    <img 
                                        src={user?.avatar || "https://ui-avatars.com/api/?name=" + (user?.name || "User") + "&background=random"} 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <button className="absolute bottom-2 right-2 w-8 h-8 bg-gray-900 text-white rounded-xl flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    <FontAwesomeIcon icon={faCamera} />
                                </button>
                            </div>

                            <div className="flex-1 pb-2">
                                <h1 className="text-3xl font-black text-gray-900 tracking-tight">{user?.name || "Full Name"}</h1>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    <span className="flex items-center gap-2 text-sm font-bold text-gray-400">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" />
                                        {user?.email || "email@example.com"}
                                    </span>
                                    <span className="flex items-center gap-2 text-sm font-bold text-gray-400">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-500" />
                                        Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Recently"}
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-50">
                            <div className="p-6 bg-orange-50 rounded-2xl flex items-center gap-5">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm">
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-600/60">Total Impact</p>
                                    <p className="text-xl font-black text-gray-900">
                                        {loading ? "..." : `${counts.donations} Donations`}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 bg-blue-50 rounded-2xl flex items-center gap-5">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                                    <FontAwesomeIcon icon={faHandsHelping} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600/60">Community Service</p>
                                    <p className="text-xl font-black text-gray-900">
                                        {loading ? "..." : `${counts.activities} Activities`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="px-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Privacy</h3>
                        <p className="text-sm font-bold text-gray-600">Profile is visible to project leads.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}