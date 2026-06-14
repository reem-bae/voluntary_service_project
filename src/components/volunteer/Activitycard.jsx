


    import useAuth from "../../hooks/useAuth"
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { faLocationDot, faCalendarDay, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApplyVolunteerForm from "./Acrivityapplyform";



export default function Activitycard({ activity, applied: initialApplied }) {
    const [applied, setapplied] = useState(initialApplied || false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        const pendingActivityId = localStorage.getItem("pendingActivityId");
        
      
        if (user && pendingActivityId === activity._id) {
            setIsFormOpen(true); 
            localStorage.removeItem("pendingActivityId"); 
        }
    }, [user, activity._id]);
 
    const displayData = activity?.title ? activity : activity?.activity;

    function handleApply() {
        if (!user) {
            localStorage.setItem("pendingActivityId", activity._id);
            alert("Please login to apply!");
            navigate("/login");
        } else {
            setIsFormOpen(true);
        }
    }

    const handleSuccess = () => {
        setapplied(true);
        setIsFormOpen(false);
    };

    return (
        <div className="group bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
           
            <div className="mb-4">
                <h1 className="text-xl font-black text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">
                   
                    {displayData.title}
                </h1>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                {displayData.description }
            </p>

          
            <div className="space-y-3 mb-8 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 text-xs">
                        <FontAwesomeIcon icon={faCalendarDay} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide">
                        {displayData.date }
                    </span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-xs">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide">
                        {displayData.location }
                    </span>
                </div>
            </div>

           
            <div className="mt-auto">
                {!applied ? (
                    <button 
                        onClick={handleApply}
                        className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-gray-200"
                    >
                        Apply Now
                    </button>
                ) : (
                    <div className="w-full bg-green-50 text-green-700 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-green-100 animate-pulse">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Applied Successfully
                    </div>
                )}
            </div>

            {isFormOpen && (
                <ApplyVolunteerForm 
                    activity={displayData} 
                    onClose={() => setIsFormOpen(false)} 
                    onSuccess={handleSuccess} 
                />
            )}
        </div>
    );
}