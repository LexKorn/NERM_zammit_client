import React, {useState, useEffect} from 'react';

import {updateSystem} from '../../http/systemAPI';
import { ISystem, IDescription } from '../../types/types';
import CUSystem from '../CUSystem';

interface ModalUpdateSystemProps {
    show: boolean;
    onHide: () => void;
    system: ISystem;
};


const ModalUpdateSystem: React.FC<ModalUpdateSystemProps> = ({show, onHide, system}) => {
    const [title, setTitle] = useState<string>('');    
    const [description, setDescription] = useState<IDescription[]>([]); 
    // @ts-ignore
    const [photo, setPhoto] = useState<FileList>([]);

    useEffect(() => {
        setTitle(system.title);
        setDescription(system.description);
    }, [show]);

    return (
        <CUSystem
            id={system.id}
            title={title}
            description={description}
            photo={photo}
            setTitle={setTitle}
            setDescription={setDescription}
            setPhoto={setPhoto}
            handler={updateSystem}
            modalTitle='Обновить систему'
            btnName='Обновить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalUpdateSystem;