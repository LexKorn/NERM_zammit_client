import React, {useState} from 'react';

import { createVacancy } from '../../http/vacancyAPI';
import { ICondition, IDuty, IRequirement } from '../../types/types';
import CUVacancy from '../CUVacancy';

interface ModalAddVacancyProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddVacancy: React.FC<ModalAddVacancyProps> = ({show, onHide}) => {
    const [name, setName] = useState<string>('');    
    const [condition, setCondition] = useState<ICondition[]>([]);
    const [duty, setDuty] = useState<IDuty[]>([]);
    const [requirement, setRequirement] = useState<IRequirement[]>([]);

    return (
        <CUVacancy
            id={0}
            name={name}
            condition={condition}
            duty={duty}
            requirement={requirement}
            setName={setName}
            setCondition={setCondition}
            setDuty={setDuty}
            setRequirement={setRequirement}
            // @ts-ignore
            handler={createVacancy}
            modalTitle='Добавить новую услугу'
            btnName='Добавить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalAddVacancy;