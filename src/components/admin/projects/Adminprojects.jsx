
import { useState, useEffect } from "react";
import ProjectForm from "./projectform"; 
import ProjectTable from "./projecttable";
import { faFolderOpen, faPlusSquare, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [activeTab, setActiveTab] = useState("activities"); 

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: "School Support",
        category: "Education",
        goalAmount: 3000,
        raisedAmount: 1200,
        status: "active"
      }
    ]);
  }, []);

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleEdit = (project) => {
    setEditing(project);
    setActiveTab("project form"); 
  };

  const handleSave = (projectData) => {
    if (editing) {
      setProjects(projects.map(p => p.id === editing.id ? { ...projectData, id: editing.id } : p));
    } else {
      setProjects([...projects, { ...projectData, id: Date.now() }]);
    }
    setEditing(null);
    setActiveTab("activities");
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] p-6 md:p-10 lg:p-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center text-sm">
                <FontAwesomeIcon icon={faBriefcase} />
            </div>
            Project Management
          </h1>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mt-2">
            Overview and Initiative Creation
          </p>
        </div>

        <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-1 self-start md:self-center">
          <button 
            type="button"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all
              ${activeTab === "activities" 
                ? "bg-white text-gray-900 shadow-sm" 
                : "text-gray-400 hover:text-gray-600"}`}
            onClick={() => setActiveTab("activities")}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            Project List
          </button>

          <button 
            type="button"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all
              ${activeTab === "project form" 
                ? "bg-white text-gray-900 shadow-sm" 
                : "text-gray-400 hover:text-gray-600"}`}
            onClick={() => {
                setEditing(null); 
                setActiveTab("project form");
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
            {editing ? "Edit Project" : "New Project"}
          </button>
        </div>
      </div>

      <div className="transition-all duration-300">
        {activeTab === "activities" ? (
          <div className="fade-in">
             <ProjectTable projects={projects} onDelete={handleDelete} onEdit={handleEdit} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto fade-in">
            <ProjectForm onSave={handleSave} editing={editing} />
          </div>
        )}
      </div>
    </div>
  );
}