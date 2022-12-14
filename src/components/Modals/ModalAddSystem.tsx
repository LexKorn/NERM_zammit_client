import React, {useState} from 'react';

import {createSystem} from '../../http/systemAPI';
import CUSystem from '../CUSystem';

interface ModalAddSystemProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddSystem: React.FC<ModalAddSystemProps> = ({show, onHide}) => {
    const [title, setTitle] = useState<string>('');    
    const [description, setDescription] = useState<string>(''); 
    // @ts-ignore
    const [photo, setPhoto] = useState<FileList>([]);

    return (
        <CUSystem
            id={0}
            title={title}
            description={description}
            photo={photo}
            setTitle={setTitle}
            setDescription={setDescription}
            setPhoto={setPhoto}
            // @ts-ignore
            handler={createSystem}
            modalTitle='Добавить новую систему'
            btnName='Добавить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalAddSystem;