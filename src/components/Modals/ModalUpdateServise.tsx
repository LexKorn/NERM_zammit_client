import React, {useState} from 'react';

import CUServise from '../CUServise';
import {updateServise} from '../../http/serviseAPI';
import { IServise } from '../../types/types';

interface ModalUpdateServiseProps {
    show: boolean;
    onHide: () => void;
    servise: IServise;
    initId: number;
    initTitle: string;
    initDescription: string;
    initCover: File;
};


const ModalUpdateServise: React.FC<ModalUpdateServiseProps> = ({show, onHide, servise, initId, initTitle, initDescription, initCover}) => {
    const [title, setTitle] = useState<string>(initTitle);    
    const [description, setDescription] = useState<string>(initDescription); 
    // @ts-ignore
    const [cover, setCover] = useState<File>(initCover);

    return (
        <CUServise
            id={initId}
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