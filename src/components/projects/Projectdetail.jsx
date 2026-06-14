

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Projectdetail() {
    const {id} = useParams()
   const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/projects/${id}`);

        if (!res.ok) {
          throw new Error("Project not found");
        }

        const data = await res.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Loading project...</p>
      </div>
    );
  }
   if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-black text-gray-400 uppercase tracking-widest">
          Project Not Found
        </p>
      </div>
    );
  }

    return (
        <div className="max-w-6xl mx-auto my-20 p-6 md:p-12 bg-white shadow-2xl rounded-[3rem] border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-gray-100">
                        {
                          project.image && (
                            <img src={`http://localhost:5000${project.image}`} alt="detail" className="w-full h-full object-cover" />

                          )
                        }
                    </div>
                    <div className="bg-orange-50 p-8 rounded-3xl border-l-8 border-orange-500">
                        <p className="text-xl text-orange-700 font-bold italic leading-relaxed">
                            "{project.shortDescription}"
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-none">{project.title}</h1>
                  

                    <p className="text-gray-600 text-lg leading-relaxed">{project.fullDescription}</p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                            <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Goal Amount</span>
                            <span className="text-2xl font-black text-gray-900">{project.goalAmount} <span className="text-xs text-orange-600"> $ </span></span>
                        </div>
                        <div className="p-6 bg-orange-600 rounded-3xl text-white shadow-lg shadow-orange-200">
                            <span className="block text-xs font-black text-white/60 uppercase tracking-widest mb-2">Raised Amount</span>
                            <span className="text-2xl font-black">{project.raisedAmount} $ </span>
                        </div>
                    </div>

                    <div className="space-y-6 pt-6 border-t border-gray-100">
                        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-2xl">
                            <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">Min Volunteers Required</span>
                            <span className="text-xl font-black text-orange-600">{project.volunteersRequired}</span>
                        </div>
                        <div className="space-y-2">
                            <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">Skill Required</span>
                            <p className="text-gray-800 font-bold text-lg bg-white p-4 rounded-2xl border-2 border-orange-100">{project.skillsRequired}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}