
import Activitycard from "./Activitycard"


export default function Activitylist({activities, selectedactivity }) {
 

    const filteredactivity = selectedactivity === "All" ?
        activities : activities.filter((activity) => activity.category === selectedactivity);

    return (
        <div className="w-full">
            {filteredactivity.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {filteredactivity.map((activity) => (
                        <div key={activity.id} className="h-full">
                            <Activitycard activity={activity} />
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State Design */
                <div className="flex flex-col items-center justify-center py-20 px-6 bg-gray-50 rounded-[2.5rem] border border-dashed border-gray-200">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">🔍</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">No activities found</h3>
                    <p className="text-gray-500 text-center max-w-sm">
                        We couldn't find any activities matching the "{selectedactivity}" category at the moment. Please try another filter.
                    </p>
                </div>
            )}

    
            <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6">
                <p className="text-sm font-bold text-gray-400">
                    Showing <span className="text-gray-900">{filteredactivity.length}</span> activities
                </p>
            </div>
        </div>
    )
}