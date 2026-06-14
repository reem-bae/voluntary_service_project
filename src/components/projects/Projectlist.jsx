import ProjectCard from "./Projectcard"



export default function Projectlist({projects, selectedproject}) {
  const fillterdProject = selectedproject === "All" ?
  projects : projects.filter((project) => project.category === selectedproject)

  return <div>
    {
      fillterdProject.length > 0 ? (fillterdProject.map((project, index) =>(
        <ProjectCard key={index} project={project} />)) ): <p>No project found</p>
    }
  </div>
}