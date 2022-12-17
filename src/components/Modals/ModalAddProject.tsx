import React, {useState} from 'react';

import { createProject } from '../../http/projectAPI';
import { IVolume, IInform, IProjectPhoto } from '../../types/types';
import CUProject from '../CUProject';

interface ModalAddProjectProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddProject: React.FC<ModalAddProjectProps> = ({show, onHide}) => {
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

    return (
        <CUProject
            id={0}
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
            handler={createProject}
            modalTitle='Добавить новый проект'
            btnName='Добавить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalAddProject;