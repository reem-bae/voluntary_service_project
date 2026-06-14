


    const categories = ["All", "Health", "Education", "Environment", "Community"]

export default function Projectfillter({selectedcategories, setselectedcategories}){

    return (
        <div className="flex flex-wrap items-center gap-3 py-4 mb-5">
            <span className="text-sm font-black uppercase tracking-widest text-gray-400 mr-2">
                Filter By:
            </span>
            
            <div className="flex flex-wrap gap-2">
                {categories.map((category)=>(
                    <button 
                        key={category}
                        onClick={()=> setselectedcategories(category)}
                        className={`
                            px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform active:scale-95
                            ${selectedcategories === category 
                                ? "bg-orange-600 text-white shadow-lg shadow-orange-200" 
                                : "bg-white text-gray-600 border border-gray-100 hover:border-orange-500 hover:text-orange-600 shadow-sm"
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}