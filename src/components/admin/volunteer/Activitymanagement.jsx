
import { useEffect, useState } from "react";
import { getActivities, deleteActivity } from "../../../service/activityService";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUsers,
  faTrashAlt,
  faEdit,
  faBolt,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActivityManagement() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const current = activities.currentVolunteers || 0;
  const max = activities.maxVolunteers || 1; // Default to 1 to avoid division by zero
  const percentage = Math.min(Math.round((current / max) * 100), 100);

  useEffect(() => {
    getActivities()
      .then((data) => setActivities(data))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteActivity(id);
      setActivities((prevActivities) =>
        prevActivities.filter((activity) => activity._id !== id)
      );
      alert("Activity deleted");
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

      <div className="px-8 py-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-orange-100">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            Activity Management
          </h2>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-2 ml-13">
            Monitor and coordinate volunteer engagement
          </p>
        </div>
        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          <FontAwesomeIcon icon={faLayerGroup} />
          {activities.length} Total Activities
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Activity</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Category</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Logistics</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Volunteers</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {activities.map((activity) => (
              <tr key={activity._id} className="hover:bg-gray-50/30 transition-colors group">
                <td className="px-8 py-5">
                  <span className="font-black text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                    {activity.title}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600">
                    {activity.category}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 w-3" />
                      {activity.date}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-rose-500 w-3" />
                      {activity.location}
                    </div>
                  </div>
                </td>

                <td className="px-8 py-5">
                  <div className="flex flex-col gap-2 min-w-30">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-gray-900">
                        {activity.currentVolunteers || 0} Joined
                      </span>
                      <span className="text-gray-400">
                        Limit: {activity.maxVolunteers || 0}
                      </span>
                    </div>

                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${(activity.currentVolunteers || 0) >= (activity.maxVolunteers || 0)
                            ? "bg-rose-500"
                            : "bg-orange-600"
                          }`}
                        style={{
                          width: `${Math.min(((activity.currentVolunteers || 0) / (activity.maxVolunteers || 1)) * 100, 100)}%`
                        }}
                      ></div>
                    </div>
                    <p className={`text-[9px] font-bold uppercase tracking-tighter ${(activity.currentVolunteers || 0) >= (activity.maxVolunteers || 0) ? "text-rose-500" : "text-gray-400"
                      }`}>
                      {(activity.currentVolunteers || 0) >= (activity.maxVolunteers || 0)
                        ? "Capacity Reached"
                        : `${(activity.maxVolunteers || 0) - (activity.currentVolunteers || 0)} spots left`}
                    </p>
                  </div>
                </td>

                <td className="px-8 py-5 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleDelete(activity._id)}
                      className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center shadow-sm"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} className="text-xs" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activities.length === 0 && (
        <div className="py-24 text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-200 text-2xl mx-auto mb-4">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No active activities found in the database</p>
        </div>
      )}
    </div>
  );
}