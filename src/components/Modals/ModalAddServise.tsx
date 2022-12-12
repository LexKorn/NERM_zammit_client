import React, {useState} from 'react';

import {createServise} from '../../http/serviseAPI';
import CUServise from '../CUServise';

interface ModalAddServiseProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddServise: React.FC<ModalAddServiseProps> = ({show, onHide}) => {
    const [title, setTitle] = useState<string>('');    
    const [description, setDescription] = useState<string>(''); 
    // @ts-ignore
    const [cover, setCover] = useState<File>(null);

    return (
        <CUServise
            id={0}
            title={title}
            description={description}
            cover={cover}
            setTitle={setTitle}
            setDescription={setDescription}
            setCover={setCover}
            // @ts-ignore
            handler={createServise}
            modalTitle='Добавить новую услугу'
            btnName='Добавить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalAddServise;