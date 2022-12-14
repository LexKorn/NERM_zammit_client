import React, {useState, useEffect} from 'react';

import { createVacancy } from '../../http/vacancyAPI';
import { IVacancy, ICondition, IDuty, IRequirement } from '../../types/types';
import CUVacancy from '../CUVacancy';

interface ModalCloneVacancyProps {
    show: boolean;
    onHide: () => void;
    vacancy: IVacancy;
};


const ModalCloneVacancy: React.FC<ModalCloneVacancyProps> = ({show, onHide, vacancy}) => {
    const [name, setName] = useState<string>('');    
    const [condition, setCondition] = useState<ICondition[]>([]);
    const [duty, setDuty] = useState<IDuty[]>([]);
    const [requirement, setRequirement] = useState<IRequirement[]>([]);

    useEffect(() => {
        setName(vacancy.name);
        setCondition(vacancy.condition);
        setDuty(vacancy.duty);
        setRequirement(vacancy.requirement);
    }, [show]);
        

    return (
        <CUVacancy
            id={vacancy.id}
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
            modalTitle='Дублировать вакансию'
            btnName='Дублировать'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalCloneVacancy;