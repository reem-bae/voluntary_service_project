

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Project() {
  const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/projects/all");
                const data = await res.json();
                setProjects(data);
            } catch (err) {
                console.error("Error fetching projects:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <div className="text-center p-20">Loading Projects...</div>;

    return (
        <section className="py-20 px-[5%] bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Initiatives</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our current projects focused on addressing community needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projects && projects.slice(0,3).map((p, i) => (
                        <div key={i} className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all">
                            <div className={`h-48 ${p.color} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                <img src={`http://localhost:5000${p.image}`} alt={p.title}  className="w-full h-48 object-cover"/>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-3">{p.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{p.shortDescription}</p>
                               <Link to={`/projectdetail/${p._id}`} className="block">
                  <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-lg">
                    View Detail
                  </button>
              </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 