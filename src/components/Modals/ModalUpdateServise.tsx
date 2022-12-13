import React, {useState, useEffect} from 'react';

import CUServise from '../CUServise';
import {updateServise} from '../../http/serviseAPI';
import { IServise } from '../../types/types';

interface ModalUpdateServiseProps {
    show: boolean;
    onHide: () => void;
    servise: IServise;
};


const ModalUpdateServise: React.FC<ModalUpdateServiseProps> = ({show, onHide, servise}) => {
    const [title, setTitle] = useState<string>('');    
    const [description, setDescription] = useState<string>(''); 
    // @ts-ignore
    const [cover, setCover] = useState<File>(null);

    useEffect(() => {
        setTitle(servise.title);
        setDescription(servise.description);
    }, [show]);
    
    return (
        <CUServise
            id={servise.id}
            title={title}
            description={description}
            cover={cover}
            setTitle={setTitle}
            setDescription={setDescription}
            setCover={setCover}
            handler={updateServise}
            modalTitle='Обновить услугу'
            btnName='Обновить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalUpdateServise;