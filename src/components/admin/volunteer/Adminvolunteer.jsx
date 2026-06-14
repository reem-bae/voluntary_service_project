

import { useState } from "react";
import ActivityManagement from "./Activitymanagement";
import VolunteerApplications from "./Volunteerapplications";
import ActivityForm from "./Activityform";
import { faUsersGear, faPlusCircle, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminVolunteer() {
  const [activeTab, setActiveTab] = useState("activities");
  const [refreshActivities, setRefreshActivities] = useState(false);

  const getTabClass = (tabName) => `
    flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300
    ${activeTab === tabName 
      ? "bg-gray-900 text-white shadow-lg shadow-gray-200 translate-y-[-2px]" 
      : "bg-white text-gray-400 hover:text-gray-600 border border-gray-100"}
  `;

  return (
    <div className="min-h-screen bg-[#fcfcfd] p-6 md:p-10 lg:p-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-xl shadow-xl shadow-orange-100">
                <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              Volunteer Hub
            </h1>
          </div>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] ml-16">
            Coordination, Applications & Scheduling
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            className={getTabClass("activities")}
            onClick={() => setActiveTab("activities")}
          >
            <FontAwesomeIcon icon={faUsersGear} className="text-xs" />
            Manage Activities
          </button>

          <button
            className={getTabClass("activity form")}
            onClick={() => setActiveTab("activity form")}
          >
            <FontAwesomeIcon icon={faPlusCircle} className="text-xs" />
            New Activity
          </button>
        </div>
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
        {activeTab === "activities" && (
          <ActivityManagement
            refresh={refreshActivities}
            setRefresh={setRefreshActivities}
          />
        )}

        {activeTab === "applications" && (
          <div className="max-w-6xl mx-auto">
            <VolunteerApplications />
          </div>
        )}

        {activeTab === "activity form" && (
          <div className="max-w-4xl mx-auto">
            <ActivityForm />
          </div>
        )}
      </div>
    </div>
  );
}