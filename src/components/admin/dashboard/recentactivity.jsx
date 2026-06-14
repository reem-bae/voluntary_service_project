 import { 
    faHandHoldingHeart, 
    faUserGear, 
    faFolderTree, 
    faClock 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const recentActivities = [
  { id: 1, type: "volunteer", title: "Clean Park", user: "Alice", status: "pending", date: "2025-12-19T09:00:00Z" },
  { id: 2, type: "donation", title: "Health Project", user: "Bob", amount: 50, date: "2025-12-18T14:30:00Z" },
  { id: 3, type: "project", title: "Education Project", user: "Admin", date: "2025-12-18T12:00:00Z" }
];

export default function Recentactivity() {

    const getActivityStyles = (type) => {
        switch(type) {
            case 'donation': return { icon: faHandHoldingHeart, color: 'text-orange-600', bg: 'bg-orange-50' };
            case 'volunteer': return { icon: faUserGear, color: 'text-blue-600', bg: 'bg-blue-50' };
            default: return { icon: faFolderTree, color: 'text-purple-600', bg: 'bg-purple-50' };
        }
    }

    return (
        <div className="bg-white rounded-4xl border border-gray-100 p-8 shadow-sm">
         
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-xl font-black text-gray-900 tracking-tight">Recent Activity</h1>
                <button className="text-xs font-bold text-orange-600 hover:underline px-3 py-1 bg-orange-50 rounded-lg">
                    View All
                </button>
            </div>

            <div className="space-y-6 relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-100"></div>

                {recentActivities.map((activity) => {
                    const styles = getActivityStyles(activity.type);
                    
                    return (
                        <div key={activity.id} className="relative flex items-start gap-6 group">
                            <div className={`relative z-10 w-12 h-12 rounded-xl ${styles.bg} ${styles.color} flex items-center justify-center text-lg border-2 border-white shadow-sm transition-transform group-hover:scale-110`}>
                                <FontAwesomeIcon icon={styles.icon} />
                            </div>

                            <div className="grow pt-1">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-sm font-black text-gray-900 capitalize">
                                        {activity.type} Activity
                                    </h2>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <FontAwesomeIcon icon={faClock} className="text-[8px]" />
                                        {new Date(activity.date).toLocaleDateString()}
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                    <span className="font-bold text-gray-900">{activity.user}</span> 
                                    {activity.type === "donation" 
                                        ? ` contributed $${activity.amount} to the cause` 
                                        : ` registered for the "${activity.title}" project`}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}