
import React, { useState } from 'react';

const ApplyVolunteerForm = ({ activity, onClose, onSuccess }) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem("token");

        try {
            const response = await fetch("http://localhost:5000/api/volunteer/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    activityId: activity._id,
                    status: "Pending",
                    message: message 
                })
            });

            const data = await response.json();

           if (response.ok) {
    alert("Application Successful!");
    onSuccess(); 
    

    navigate("/User"); 
} else {
                alert(data.message || "Something went wrong");
            }
        } catch (err) {
            alert("Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-2xl">
                <h2 className="text-xl font-bold mb-2">Apply for: {activity.title}</h2>
                <p className="text-gray-500 text-sm mb-4">Confirm your interest in this volunteer activity.</p>
                
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium mb-1">Why do you want to join? (Optional)</label>
                    <textarea 
                        className="w-full border p-2 rounded-lg mb-4 h-24 focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="Tell us a bit about your experience..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    
                    <div className="flex gap-2">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                        >
                            {loading ? "Submitting..." : "Submit Application"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyVolunteerForm;