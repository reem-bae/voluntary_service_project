 import { Link } from "react-router-dom";
import Projectprogres from "./Projectprogress";


export default function ProjectCard({project}){
  console.log("CARD DATA:", project);
     return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex gap-[10%] group h-full mb-40">

      <div className="relative">
          <span className="absolute top-6 left-6 z-10 bg-gray-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
            {project.status}
          </span>
          <div className="h-64 w-80 ml-10 mt-5 bg-gray-200 overflow-hidden">
            {
              project.image && (
                <img src={`http://localhost:5000${project.image}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              )
            }
          </div>
      </div>

      <div className="p-8 flex flex-col grow space-y-4">
          <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm grow italic">
            {project.shortDescription}
          </p>

          <div className="py-4 border-y border-gray-50">
            <Projectprogres raised={Number(project.raisedAmount) || 0} goal={Number(project.goalAmount)|| 1} />
          </div>

          <div className="pt-4 flex flex-col gap-3">
              <Link to={`/projectdetail/${project._id}`} className="block">
                  <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-lg">
                    View Detail
                  </button>
              </Link>
          </div>
      </div>
    </div>)
}