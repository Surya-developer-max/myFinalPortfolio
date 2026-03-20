import ProjectProvider from "./projectProvider";
import { ProjectContext } from "../App";
import { useContext } from "react";
export default function project() {
    const projects=useContext(ProjectContext)
    return (
        <>
            <div className="">
                <div className="main-project-container">
                    <div className='tittle-div d-block'>
                        <h2><span className='levender-color'>/</span>projects</h2>
                        <p style={{ fontSize: '12px' }} className="gray-color ms-3">List Of My Projects</p>
                    </div>
                    <div>
                        <div className='tittle-div d-block mt-5'>
                            <h3><span className='levender-color'>#</span>Complete-apps</h3>
                        </div>
                        <div className="project-body">
                            {projects.map((val) => {
                                return (
                                    <>
                                        <div id="project-cards">
                                            <ProjectProvider img={val.img} tittle={val.tittle} tools={val.tools} summary={val.summary} key={val.index} link={val.page_link} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}