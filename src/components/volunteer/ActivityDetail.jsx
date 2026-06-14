
import ApplyVolunteerForm from "./Acrivityapplyform";

const ActivityDetails = ({ activity }) => {
    const [showForm, setShowForm] = useState(false);
    const token = localStorage.getItem("token");

    const handleApplyClick = () => {
        if (!token) {
            alert("Please login to apply!");
           
            return;
        }
        setShowForm(true); 
    };

    return (
        <div>

            
            <button 
                onClick={handleApplyClick}
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
            >
                Apply to Volunteer
            </button>

          
            {showForm && (
                <ApplyVolunteerForm
                    activity={activity} 
                    onClose={() => setShowForm(false)} 
                    onSuccess={() => {/* Update UI if needed */}}
                />
            )}
        </div>
    );
};