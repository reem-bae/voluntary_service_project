

import { useState, useEffect } from "react";
import {  faHandsHelping, faClock, faCircle, faHeart } from "@fortawesome/free-solid-svg-icons"; // Added faHeart
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserDashboard() {
  const [applications, setApplications] = useState([]);
  const [ setDonations] = useState([]); 
  const [serverTotalDonated, setServerTotalDonated] = useState(0); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { "Authorization": `Bearer ${token}` };

      
        const volRes = await fetch("http://localhost:5000/api/volunteer/my-application", { headers });
        const volData = await volRes.json();
        if (volRes.ok) setApplications(Array.isArray(volData) ? volData : []);

        
        try {
       
          const donRes = await fetch("http://localhost:5000/api/user/my/donations", { headers });
          if (donRes.ok) {
            const donData = await donRes.json();

            setDonations(donData.donationsCount || []);
            setServerTotalDonated(donData.totalDonated || 0);
          }
        } catch (err) {
          console.log("Donation API not ready or wrong URL");
        }

      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  const totalApplied = applications.length;
  const pendingApps = applications.filter(app => app.status === "Pending").length;

  const stats = [
    { label: "Total Applications", value: totalApplied, icon: faHandsHelping, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Pending Review", value: pendingApps, icon: faClock, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Total Donated", value: `$${serverTotalDonated}`, icon: faHeart, color: "text-rose-600", bg: "bg-rose-50" },
  ];

  if (loading) return <div className="p-10 text-center font-black uppercase tracking-widest">Loading Impact...</div>;

  return (
    <div className="min-h-screen bg-[#fcfcfd] p-4 md:p-8 lg:p-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Personal Impact Dashboard</h1>
        <p className="text-gray-500 font-medium mt-1">Real-time overview of your contributions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center text-xl`}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-black text-gray-900">My Volunteer Status</h3>
          <span className="text-xs font-bold text-gray-400">{totalApplied} Total Activities</span>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-10 border-2 border-dashed border-gray-100 rounded-3xl">
            <p className="text-gray-400 font-bold">You haven't applied to any activities yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app) => (
              <div key={app._id} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${
                    app.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {app.status}
                  </span>
                </div>
                <h4 className="font-black text-gray-900 mb-1">
                  {app.activity?.title || "Unknown Activity"}
                </h4>
                <p className="text-xs text-gray-500 mb-4">{app.activity?.location}</p>
                
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                   <FontAwesomeIcon icon={faCircle} className={app.status === 'Approved' ? 'text-green-500' : 'text-orange-500'} />
                   Applied on: {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : 'N/A'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}