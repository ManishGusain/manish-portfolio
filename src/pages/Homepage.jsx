import React, { useState } from 'react';
import { aboutData, experienceData, projectData, sectionOptions } from '../constant';

const AboutContent = () => {
    return (
        <div className='about-container'>
            <h1 className='name'>{'Manish Gusain'}</h1>
            <h3>{aboutData}</h3>
            <h3 className='about-sub'>{'Experienced In'}</h3>
            <h3 className='about-sub'>{'Get In Touch'}</h3>
            <h3>{'manishgusain66@gmail.com'}</h3>
            <br/>
            <h3>{'9899809880'}</h3>
        </div>
    );
};

const SkillsContent = () => {
    return (
        <div>
            <h2>Skills</h2>
            <p>JavaScript | React JS | React Native | HTML |
                CSS | AWS | MySQL | Redux | Bootstrap | Git
                | Python | Rest API's</p>
        </div>
    );
};

const ProjectContent = ({ title, description, downloadLink }) => {
    return (
        <div className='project-container'>
            <h2 className="experience-title">{title}</h2>
            <p className="position-title">{description}</p>
            <div className="dl-btn-container">
                <a href={downloadLink} className='dl-btn' target="_blank">Download Link</a>
            </div>
        </div>
    );
};


const Experience = ({ companyName, duration, position, tasks }) => (
    <div className="experience-container">
        <h2 className="experience-title">{companyName} | {duration}</h2>
        <h3 className="position-title">{position}</h3>
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li className="task-list-item" key={index}>{task}</li>
            ))}
        </ul>
    </div>
);

export default function Homepage() {
    const [selectedOption, setSelectedOption] = useState('About');

    const renderContent = () => {
        switch (selectedOption) {
            case 'Experience':
                return (
                    experienceData.map((experience, index) => (
                        <Experience
                            key={index}
                            companyName={experience.companyName}
                            duration={experience.duration}
                            position={experience.position}
                            tasks={experience.tasks}
                        />
                    ))
                );
            case 'About':
                return <AboutContent />;
            case 'Skills':
                return <SkillsContent />;
            case 'Projects':
                return (
                    projectData.map((project, index) => (
                        <ProjectContent
                            key={index}
                            title={project.title}
                            description={project.description}
                            downloadLink={project.downloadLink}
                        />
                    ))
                );
            default:
                return null;
        }
    };

    const handleSelect = (label) => setSelectedOption(label);

    return (
        <div className="container">
            <div className="section">
                <div>
                    {
                        sectionOptions.map((option, index) => {
                            return (
                                <p className='sec-label' key={index} onClick={() => handleSelect(option)}>{option}</p>
                            );
                        })
                    }
                </div>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
}