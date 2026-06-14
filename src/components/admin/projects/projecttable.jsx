

import { useState, useEffect } from "react";
import { getProjects, deleteProject } from "../../../service/projectservice";
import { faBriefcase, faUsers, faBullseye, faTrashAlt, faEdit, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectTable() {
 const [projects, setProjects] = useState([])
 
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjects(projects.filter((p) => p._id !== id));
  };
 
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-white">
          <div>
              <h2 className="text-xl font-black text-gray-900">Project Inventory</h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Manage initiative goals and volunteer requirements</p>
          </div>
          <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <FontAwesomeIcon icon={faLayerGroup} />
              {projects.length} Total Projects
          </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Initiative</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Category</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Financials</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Volunteers</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Status</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {projects.map((p, index) => (
              <tr key={index} className="hover:bg-gray-50/30 transition-colors group">
                <td className="px-8 py-5 max-w-xs">
                  <div className="flex flex-col">
                    <span className="font-black text-gray-900 text-sm group-hover:text-orange-600 transition-colors">{p.title}</span>
                    <span className="text-[10px] font-bold text-gray-400 line-clamp-1 mt-1">{p.shortDescription}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600">
                    {p.category}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs font-black text-gray-900">
                        <FontAwesomeIcon icon={faBullseye} className="text-orange-500 text-[10px]" />
                        ${p.goalAmount?.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-bold text-green-600">
                        Raised: ${p.raised?.toLocaleString()}
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2 text-sm font-black text-gray-700">
                    <FontAwesomeIcon icon={faUsers} className="text-blue-500" />
                    {p.volunteersRequired}
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg
                    ${p.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                    {p.status}
                  </span>
                </td>

                <td className="px-8 py-5">
                    <div className="flex items-center justify-center gap-2">
                       
                        <button 
                            onClick={() => handleDelete(p._id)}
                            className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 hover:bg-rose-600 hover:text-white transition-all flex items-center justify-center"
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="text-xs" />
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {projects.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 text-2xl">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <p className="text-gray-400 font-bold">No active projects found.</p>
          </div>
      )}
    </div>
  );
}