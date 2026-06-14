
import { useEffect, useState } from "react";
import { faUserCheck, faUserClock, faUserTimes, faInbox, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function VolunteerApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications()
      .then((data) => setApplications(data))
      .finally(() => setLoading(false));
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);
      setApplications(
        applications.map((app) =>
          app._id === id ? { ...app, status } : app
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
    </div>
  );

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-8 py-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
          <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-blue-100">
                    <FontAwesomeIcon icon={faInbox} />
                </div>
                Volunteer Applications
              </h2>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-2 ml-13">Review and process community involvement requests</p>
          </div>
          <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pending Review: </span>
              <span className="text-sm font-black text-orange-600 ml-1">
                {applications.filter(a => a.status === 'pending').length}
              </span>
          </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Applicant</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Assigned Activity</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">Applied On</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">Status</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-right pr-12">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {applications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50/30 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-black text-xs">
                        {app.user.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-gray-900 text-sm">{app.user.name}</span>
                      <span className="text-[10px] font-bold text-gray-400 lowercase">{app.user.email}</span>
                    </div>
                  </div>
                </td>

                <td className="px-8 py-5">
                   <div className="flex items-center gap-2">
                       <FontAwesomeIcon icon={faAddressCard} className="text-gray-300 text-xs" />
                       <span className="font-bold text-gray-700 text-sm tracking-tight">{app.activity.title}</span>
                   </div>
                </td>
                <td className="px-8 py-5 text-center">
                   <span className="text-[11px] font-black text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                    {new Date(app.appliedAt).toLocaleDateString()}
                   </span>
                </td>

                <td className="px-8 py-5">
                  <div className="flex justify-center">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg
                        ${app.status === 'approved' ? 'bg-green-50 text-green-600' : 
                          app.status === 'rejected' ? 'bg-rose-50 text-rose-600' : 
                          'bg-orange-50 text-orange-600'}`}>
                        <FontAwesomeIcon icon={app.status === 'approved' ? faUserCheck : app.status === 'rejected' ? faUserTimes : faUserClock} />
                        {app.status}
                    </span>
                  </div>
                </td>

                <td className="px-8 py-5 text-right pr-12">
                  {app.status === "pending" ? (
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="px-4 py-2 bg-gray-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-green-600 transition-all shadow-sm"
                        onClick={() => handleStatus(app._id, "approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="px-4 py-2 bg-white border border-gray-200 text-gray-400 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all shadow-sm"
                        onClick={() => handleStatus(app._id, "rejected")}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">Decision Logged</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {applications.length === 0 && (
        <div className="py-24 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-200 text-2xl mx-auto mb-4">
                <FontAwesomeIcon icon={faInbox} />
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No applications found in the queue</p>
        </div>
      )}
    </div>
  );
}