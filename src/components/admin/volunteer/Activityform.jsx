
import { useState } from "react";
import { createActivity } from "../../../service/activityService";
import { 
  faHeading, 
  faAlignLeft, 
  faLayerGroup, 
  faCalendarDay, 
  faMapMarkerAlt, 
  faUsers, 
  faPlusCircle,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActivityForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    location: "",
    maxVolunteers: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await createActivity(formData);
      alert("Activity created successfully");

      setFormData({
        title: "",
        description: "",
        category: "",
        date: "",
        location: "",
        maxVolunteers: "",
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const labelClass = "text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block ml-1";
  const inputClass = "w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-300 placeholder:font-medium";

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Create Volunteer Activity</h2>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Schedule and organize community events</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 space-y-2">
            <label className={labelClass}>
              <FontAwesomeIcon icon={faHeading} className="mr-2 text-orange-500" />
              Activity Title
            </label>
            <input 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              placeholder="e.g. Community Garden Restoration" 
              className={inputClass}
              required 
            />
          </div>

          <div className="space-y-2">
            <label className={labelClass}>
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2 text-blue-500" />
              Category
            </label>
            <input 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              placeholder="e.g. Environment" 
              className={inputClass}
            />
          </div>

          <div className="space-y-2">
            <label className={labelClass}>
              <FontAwesomeIcon icon={faUsers} className="mr-2 text-green-500" />
              Max Volunteers
            </label>
            <input 
              type="number" 
              name="maxVolunteers" 
              value={formData.maxVolunteers} 
              onChange={handleChange} 
              placeholder="0" 
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-50">
          <div className="space-y-2">
            <label className={labelClass}>
              <FontAwesomeIcon icon={faCalendarDay} className="mr-2 text-purple-500" />
              Date
            </label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              className={inputClass}
            />
          </div>

          <div className="space-y-2">
            <label className={labelClass}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-rose-500" />
              Location
            </label>
            <input 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              placeholder="City or Venue Name" 
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-2 pt-6 border-t border-gray-50">
          <label className={labelClass}>
            <FontAwesomeIcon icon={faAlignLeft} className="mr-2 text-gray-400" />
            Description
          </label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            placeholder="Describe the goals and impact of this activity..." 
            className={`${inputClass} min-h-37.5 resize-none`}
            required 
          />
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-orange-600 disabled:bg-gray-200 transition-all shadow-xl shadow-gray-100 flex items-center justify-center gap-3"
          >
            {loading ? (
              <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
            ) : (
              <FontAwesomeIcon icon={faPlusCircle} />
            )}
            {loading ? "Processing..." : "Create Activity"}
          </button>
        </div>
      </form>
    </div>
  );
}