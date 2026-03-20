import './App.css'
import Navbar from './Components/navbar'
import Project from './Components/project'
import ProjectImg1 from './assets/img1.png'
import ProjectImg2 from './assets/img2.png'
import ProjectImg3 from './assets/img3.png'
import ProjectImg4 from './assets/img4.png'
import { createContext } from "react";
import About from './Components/aboutme'
export const ProjectContext = createContext();
function App() {
  const projectData  = [
    {
      img: ProjectImg1,
      tools: "HTML CSS Bootstrap5 Js React ",
      tittle: "Portfolio",
      summary: "A Little Try",
      page_link: "https://visitemeat.netlify.app/"
    },
    {
      img: ProjectImg2,
      tools: "HTML CSS Bootstrap5 Js React ",
      tittle: "Junior Kuppanna",
      summary: "Built a scalable restaurant web application using React.js and Bootstrap.",
      page_link: "https://juniorkuppana.netlify.app/"
    },
    {
      img: ProjectImg3,
      tools: "HTML CSS Bootstrap5 Js React ",
      tittle: "The Kitchn",
      summary: " Optimized page load performance by approximately 25% through efficient front-end design.",
      page_link: "https://thekitchns.netlify.app/"
    },
    {
      img: ProjectImg4,
      tools: "HTML CSS Bootstrap5 Js React ",
      tittle: "My PortFolio",
      summary: "I Build a Scalable Portfolio for me. then, that's all",
      page_link: "https://suryaportfoliodemo.netlify.app/"
    }
  ]
  return (
    <>
      <ProjectContext.Provider value={projectData}>
        <Navbar />
        {/* <Project /> */}
        {/* <About/> */}
      </ProjectContext.Provider>
    </>
  )
}
export default App
