import heuristicats from "../images/thumbnails/heuristicats.png"
import ProjectCard from "../components/ProjectCard"

const projectData = [


        {
          "title": "Heuristicats",
          "pic": heuristicats,
          "alt": "thumbnail of heuristicats project",
          "skills": "cat-themed rpg that teaches ux design",
          "url" : "/heuristicats"
        }
  ]
  
  
  
  const projects = projectData.map(proj => (
      <ProjectCard key = {proj.title} pic={proj.pic} alt={proj.alt} title={proj.title} skills={proj.skills} url = {proj.url}/>
    ));
  
export default function Play() {
    return (
        <>
            <h1>play</h1>
            <div className = "play-container">
                {/* {projects} */}
                <p>Coming Soon!</p>
            </div>

        </>
    );
}
