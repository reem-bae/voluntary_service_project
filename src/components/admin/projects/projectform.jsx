
import { useEffect, useState } from "react";
import { createProject } from "../../../service/projectservice";
import { faPlus, faInfoCircle, faUsersGear, faTags, faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectForm({ editing }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    goalAmount: "",
    status: "draft",
    shortDescription: "",
    fullDescription: "",
    volunteersRequired: "",
    skillsRequired: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      const formData = new FormData();

    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("goalAmount", Number(form.goalAmount));
    formData.append("status", form.status);
    formData.append("shortDescription", form.shortDescription);
    formData.append("fullDescription", form.fullDescription);
    formData.append("volunteersRequired", form.volunteersRequired);
    formData.append("skillsRequired", form.skillsRequired);
if (imageFile) {
      formData.append("image", imageFile); // 👈 optional
    }
    const res=   await createProject(formData);
   if(res&& res._id){
     alert("Project created successfully!");
   }else{
    alert("Project creation failed");
   }

      setForm({
        title: "",
        category: "",
        goalAmount: "",
        status: "Active",
        shortDescription: "",
        fullDescription: "",
        volunteersRequired: "",
        skillsRequired: ""
      });
      setImageFile(null);
      setFileInputKey(Date.now())
    } catch (err) {
      console.error(err);
      alert("Error creating project");
    }
  }
      


  const inputClass = "w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-gray-300 placeholder:font-medium";
  const labelClass = "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block";

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-12">
      <div className="mb-10">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
          {editing ? "Update Project" : "Create New Initiative"}
        </h2>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Define project goals and resources</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}><FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Project Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Clean Water for All"
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}><FontAwesomeIcon icon={faTags} className="mr-1" /> Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Environment"
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}><FontAwesomeIcon icon={faArrowAltCircleDown} className="mr-1" /> Goal Amount ($)</label>
            <input
              name="goalAmount"
              type="number"
              value={form.goalAmount}
              onChange={handleChange}
              placeholder="0.00"
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Current Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={`${inputClass} appearance-none cursor-pointer`}
            >

              <option value="active">Active</option>

            </select>
          </div>
        </div>

      
        <div className="space-y-6">
          <div className="space-y-2">
            <label className={labelClass}>Short Description</label>
            <input
              type="text"
              name="shortDescription"
              value={form.shortDescription}
              onChange={handleChange}
              placeholder="Brief summary for card views..."
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Full Description</label>
            <textarea
              name="fullDescription"
              onChange={handleChange}
              value={form.fullDescription}
              placeholder="Detailed breakdown of the initiative..."
              className={`${inputClass} min-h-30 resize-none`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-50">
          <div className="space-y-2">
            <label className={labelClass}><FontAwesomeIcon icon={faUsersGear} className="mr-1" /> Volunteers Required</label>
            <input
              type="number"
              name="volunteersRequired"
              onChange={handleChange}
              value={form.volenteersRequired}
              placeholder="0"
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Skills Required</label>
            <input
              type="text"
              name="skillsRequired"
              onChange={handleChange}
              value={form.skillsRequired}
              placeholder="e.g. Logic, Design, Teaching"
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
         <label className={labelClass}>Project image</label>
            <input
            key={fileInputKey}
              type="file"
              accept="image/*"
              onChange={(e)=>setImageFile(e.target.files[0])
              }
              placeholder="e.g. Logic, Design, Teaching"
              className={inputClass}
            />
            {preview && (
    <div className="mt-4 relative w-40 h-40">
      <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-xl border-2 border-orange-500" />
      <button 
        onClick={() => {setPreview(null); setImageFile(null);}} 
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs"
      >✕</button>
    </div>)}
          </div>
        </div>
        <div className="pt-8">
          <button 
            type="submit" 
            className="w-full md:w-auto px-12 py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-xl shadow-gray-100 flex items-center justify-center gap-3"
          >
            <FontAwesomeIcon icon={faPlus} />
            {editing ? "Update Project" : "Publish Project"}
          </button>
        </div>
      </form>
    </div>
  );
}