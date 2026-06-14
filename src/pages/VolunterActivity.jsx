import { useState, useEffect } from "react";
import Activityfillter from "../components/volunteer/Activityfillter";
import Activitylist from "../components/volunteer/Activitylist";
import { getActivities } from "../service/activityService";

export default function VolunteerActivity() {
    const [selectedactivity, setselectedactivity] = useState("All")
    const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

     useEffect(() => {
    getActivities()
      .then((data) => setActivities(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

    return <div className="text-center">
        <h1 className="font-black text-4xl md:text-5xl mb-8 text-gray-900 mt-10">Volunteer With Us</h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-20">Join our volunteers and take part in activities
            that bring real change to communities.
        </p>
        <Activityfillter selectedactivity={selectedactivity} setselectedactivity={setselectedactivity}/>
        <Activitylist  activities={activities} selectedactivity={selectedactivity}/>
    </div>
}