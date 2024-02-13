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
        "skills": "MicroService_Hack, Cloud, Jenkins, CI/CD Pipeline",
        "url" : "https://github.com/AdityaKhot/MicroService_Hack/"
      },

      {
        "title": "Vagary",
        "pic": vagary,
        "alt": "thumbnail of vagary project",
        "skills": "ClimateSmartAG, Globalwarming Prediction, data analytics, ml",
        "url" : "https://github.com/AdityaKhot/Analyzing-and-Predicting-the-GHG-Emission-from-Agro-Activities-using-ML-Models/"
      },

      {
        "title": "TOBY",
        "pic": toby,
        "alt": "thumbnail of toby project",
        "skills": "Brain Strokes Prediction, Data Analytics, Machine Learning",
        "url" : "https://github.com/AdityaKhot/BrainStrokePrediction/"
      },

      {
        "title": "Heuristicats",
        "pic": heuristicats,
        "alt": "thumbnail of heuristicats project",
        "skills": "Video Streaming App, Docker, Kubernetes, DevOps",
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
