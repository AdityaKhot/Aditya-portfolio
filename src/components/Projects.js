import ProjectCard from "./ProjectCard"

import heuristicats from "../images/thumbnails/heuristicats.png"
import maobi from "../images/thumbnails/maobi.png"
import market2u from "../images/thumbnails/market2u.png"
import toby from "../images/thumbnails/toby.png"
import vagary from "../images/thumbnails/vagary.png"


const projectData = [

  {
    "title": "Maobi",
    "pic": maobi,
    "alt": "thumbnail of devops project",
    "skills": "devops, cloud, ci/cd pipeline",
    "url" : "https://github.com/AdityaKhot/Introduction_to_DevOps/"
  },

    {
        "title": "Market2U",
        "pic": market2u,
        "alt": "thumbnail of market2u project",
        "skills": "responsive design, ux/ui design",
        "url" : "https://github.com/AdityaKhot/BrainStrokePrediction/"
      },

      {
        "title": "Vagary",
        "pic": vagary,
        "alt": "thumbnail of vagary project",
        "skills": "ux research, ux design",
        "url" : "https://github.com/AdityaKhot/Analyzing-and-Predicting-the-GHG-Emission-from-Agro-Activities-using-ML-Models/"
      },

      {
        "title": "TOBY",
        "pic": toby,
        "alt": "thumbnail of toby project",
        "skills": "cui design, ux design",
        "url" : "https://github.com/AdityaKhot/MicroService_Hack/"
      },

      {
        "title": "Heuristicats",
        "pic": heuristicats,
        "alt": "thumbnail of heuristicats project",
        "skills": "game art, educational game design",
        "url" : "https://github.com/AdityaKhot/DevOps_miniproject/"
      }
]



const projects = projectData.map(proj => (
    <ProjectCard key = {proj.title} pic={proj.pic} alt={proj.alt} title={proj.title} skills={proj.skills} url = {proj.url}/>
  ));


export default function Projects() {
    return(
        <div className = "projects-container">
            {projects}
        </div>

    );
}