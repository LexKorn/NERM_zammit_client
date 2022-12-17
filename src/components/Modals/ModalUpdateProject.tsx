import React, {useState, useEffect} from 'react';

import { updateProject } from '../../http/projectAPI';
import { IVolume, IInform, IProject, IProjectPhoto } from '../../types/types';
import CUProject from '../CUProject';

interface ModalUpdateProjectProps {
    show: boolean;
    onHide: () => void;
    project: IProject;
};


const ModalUpdateProject: React.FC<ModalUpdateProjectProps> = ({show, onHide, project}) => {
    const [name, setName] = useState<string>('');    
    const [task, setTask] = useState<string>(''); 
    const [location, setLocation] = useState<string>('');    
    const [category, setCategory] = useState<string>('');
    const [customer, setCustomer] = useState<string>('');    
    const [designer, setDesigner] = useState<string>(''); 
    const [period, setPeriod] = useState<string>(''); 
    const [volume, setVolume] = useState<IVolume[]>([]);
    const [inform, setInform] = useState<IInform[]>([]);
    // @ts-ignore
    const [photo, setPhoto] = useState<IProjectPhoto[]>([]);

    useEffect(() => {
        setName(project.name);
        setTask(project.task);
        setLocation(project.location);
        setCategory(project.category);
        setCustomer(project.info.customer);
        setDesigner(project.info.designer);
        setPeriod(project.info.period);
        setVolume(project.info.volume);
        setInform(project.info.inform);
        setPhoto(project.photo);
    }, [show]);


    return (
        <CUProject
            id={project.id}
            name={name}
            task={task}
            location={location}
            category={category}
            customer={customer}
            designer={designer}
            period={period}
            volume={volume}
            inform={inform}
            photo={photo}
            setName={setName}
            setTask={setTask}
            setLocation={setLocation}
            setCategory={setCategory}
            setCustomer={setCustomer}
            setDesigner={setDesigner}
            setPeriod={setPeriod}
            setVolume={setVolume}
            setInform={setInform}
            setPhoto={setPhoto}
            // @ts-ignore
            handler={updateProject}
            modalTitle='Обновить проект'
            btnName='Обновить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalUpdateProject;