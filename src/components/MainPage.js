import Card from './Card.js';
import Course from './Course.js';
import Recommendation from './Recomendation.js';
import coursesData from './data/coursesData.js';
import projectsData from './data/projectsData.js';
import recommendationData from './data/recommendationData.js';


function MainPage() {
    return (
        <div className="main-content">
            <div className="text-above-round-img">
                Mandukhai Alimaa
            </div>
            <div >
                <img src={`${process.env.PUBLIC_URL}/chibi2.png`} alt="Mandukhai Alimaa's professional portrait" className="round-image"/>
            </div>
            <div className="text-below-round-img">
                Master's student passionate about building scalable software systems.
            </div>
            <div id="resume-section" className="resume-banner">
                <h1 className="resume-text-in-banner">Resume</h1>
                <a 
                    href={`${process.env.PUBLIC_URL}/Mandy_Alimaa_master's_student_with_full_stack_exp.pdf`} 
                    download 
                    className="resume-button"
                >
                    Download
                </a>
            </div>
            <div id="project-section" className="projects-section">
                <h1 className="section-header">Projects</h1>
                <div className="projects-card">
                    {projectsData.map((projectItem, index) => {
                        return (
                            <Card
                                key={index}
                                imageSrc={projectItem.imageSrc}
                                overlayText={projectItem.overlayText}
                                paragraph={projectItem.paragraph}
                            />
                        );
                    })}
                </div>
            </div>
            <div id="course-section" className="course-work-section">
                <h1 className="section-header">Course Work</h1>
                <div className="courses-container">
                    {coursesData.map((courseItem, index) => {
                        return (
                            <Course
                                key={index}
                                courseName={courseItem.courseName}
                                description={courseItem.courseDescription}
                                logoSrc={courseItem.logoSrc}
                            />
                        );
                    })}
                </div>
            </div>
            <div id="recommendation-section" className="recommendation-section">
                <h1 className="section-header">Feedback from Previous Employers</h1>
                <div className="recommendation-container">
                    <Recommendation recommendations={recommendationData} />
                </div>                
            </div>

        </div>
    );
}

export default MainPage;
