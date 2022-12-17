import React from 'react';

import { IProject } from '../../types/types';

import './projectContainer.sass';

interface ProjectContainerProps {
    projects: IProject[];
    category: string;
    onClick: (project: IProject) => void;
};


const ProjectContainer: React.FC<ProjectContainerProps> = ({projects, category, onClick}) => {
    return (
        <div className="project__container">
            {projects && projects.filter(project => project.category === category)
                .map(item => 
                    <div className='project__item' key={item.id} onClick={() => onClick(item)} >
                        <img src={process.env.REACT_APP_API_URL + item.photo[0].photo} alt="photo" className='project__item_photo' />
                        <div className='project__item_name'>{item.name}</div>
                    </div>
                )
            }
        </div>
    );
};

export default ProjectContainer;