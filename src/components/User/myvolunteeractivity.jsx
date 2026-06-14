


import  { useEffect, useState } from 'react';
export default function Myvolunteractivity(){
const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchMyActivities = async () => {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/volunteer/my-application", {
            headers: {
                "Authorization": `Bearer ${token}` // MUST HAVE THIS
            }
        });
        const data = await res.json();
        setActivities(data);
    };
    fetchMyActivities();
}, []);

    return (
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden my-10">
         
            <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black text-gray-900">My Volunteer Activities</h2>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Track your contribution history</p>
                </div>
                <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
                    {activities.length} Total Activities
                </div>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50">
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Activity Title</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Date</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Location</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-50">
                        {activities.map((act, index)=>(
                            <tr key={index} className="hover:bg-gray-50/30 transition-colors group">
                                
                                <td className="px-8 py-5">
                                    <p className="font-black text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                                        {act.activity.title}
                                    </p>
                                </td>
                                
                             
                                <td className="px-8 py-5">
                                    <p className="text-sm font-bold text-gray-500">
                                        {new Date(act.activity.date).toLocaleDateString()}
                                    </p>
                                </td>

                                
                                <td className="px-8 py-5 text-sm font-bold text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                        {act.activity.location}
                                    </div>
                                </td>

                                <td className="px-8 py-5">
                                    <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg
                                        ${act.status === 'Completed' 
                                            ? 'bg-green-50 text-green-600' 
                                            : 'bg-blue-50 text-blue-600'}`}>
                                        {act.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {activities.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-gray-400 font-bold">No volunteer activities found.</p>
                </div>
            )}
        </div>
    )
}