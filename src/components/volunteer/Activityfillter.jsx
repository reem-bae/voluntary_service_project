
    

    const categories = ["All", "Upcoming", "Health", "Education", "Enviroment", "Community"]

export default function Activityfillter({ setselectedactivity, selectedactivity }) {
console.log(selectedactivity)
    return (
        <div className="flex flex-col space-y-4 py-6">
            
            <div className="flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-orange-600"></span>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                    Filter Activities
                </span>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setselectedactivity(category)}
                        className={`
                            px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 transform active:scale-95
                            ${selectedactivity === category 
                                ? "bg-orange-600 text-white shadow-lg shadow-orange-200 " 
                                : "bg-white border-gray-100 text-gray-500 hover:border-orange-500 hover:text-orange-600 shadow-sm"
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>
            </div>
        </div>
    )
}