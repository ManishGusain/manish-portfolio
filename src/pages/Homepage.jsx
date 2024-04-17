import React, { useState } from 'react';
import { aboutData, experienceData } from '../constant';

const AboutContent = () => {
    return (
        <div className='about-container'>
            <h2>{aboutData}</h2>
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

const ProjectContent = () => {
    return (
        <div>
            <h2>Skills</h2>
            <p>JavaScript | React JS | React Native | HTML |
                CSS | AWS | MySQL | Redux | Bootstrap | Git
                | Python | Rest API's</p>
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
    const [selectedOption, setSelectedOption] = useState('Experience');

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
                return <ProjectContent />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="section">
                <div>
                    <p className='sec-label' onClick={() => setSelectedOption('Experience')}>Experience</p>
                    <p className='sec-label' onClick={() => setSelectedOption('About')}>About</p>
                    <p className='sec-label' onClick={() => setSelectedOption('Skills')}>Skills</p>
                    <p className='sec-label' onClick={() => setSelectedOption('Projects')}>Projects</p>
                </div>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
}