import { useState, useEffect } from "react";
import Projectfillter from "../components/projects/Projectfilter";
import Projectlist from "../components/projects/Projectlist";
import { getProjects } from "../service/projectservice";

export default function Projects() {
    const [selectedcategories, setselectedcategories] = useState("All")
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    return <div>
        <div className="text-center">
            <h1 className="font-black text-4xl md:text-5xl mb-8 text-gray-900 mt-10">Our Project</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-20">Explore our ongoing and completed community initiatives.</p>
            <Projectfillter selectedcategories={selectedcategories} setselectedcategories={setselectedcategories} />
            <Projectlist projects={projects} selectedproject={selectedcategories} />
        </div>
    </div>
}









































/* 
    import { Link } from "react-router-dom";

export default function Project() {
    const initiatives = [
        {
            title: "Education Support Program",
            desc: "Providing learning support and mentorship to students in underserved communities.",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
            color: "bg-blue-50"
        },
        {
            title: "Health Awareness Initiative",
            desc: "Raising health awareness and supporting basic community health activities.",
            img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
            color: "bg-red-50"
        },
        {
            title: "Community Clean-Up Campaign",
            desc: "Mobilizing volunteers to clean public spaces and promote environmental responsibility.",
            img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
            color: "bg-green-50"
        }
    ];

    return (
        <section className="py-24 px-[5%] bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="font-bold text-4xl text-gray-900">Ongoing Initiatives</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore our current projects focused on addressing community needs through organized volunteer efforts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {initiatives.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                            <div className="h-56 overflow-hidden relative">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="p-8 space-y-4">
                                <h2 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h2>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                <Link to="/projects" className="block pt-4">
                                    <button className="w-full py-3 rounded-xl border-2 border-orange-600 text-orange-600 font-bold hover:bg-orange-600 hover:text-white transition-all transform active:scale-95">
                                        View Project
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} */