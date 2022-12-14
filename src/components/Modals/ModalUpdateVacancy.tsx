import React, {useState, useEffect} from 'react';

import { updateVacancy } from '../../http/vacancyAPI';
import { IVacancy, ICondition, IDuty, IRequirement } from '../../types/types';
import CUVacancy from '../CUVacancy';

interface ModalUpdateVacancyProps {
    show: boolean;
    onHide: () => void;
    vacancy: IVacancy;
};


const ModalUpdateVacancy: React.FC<ModalUpdateVacancyProps> = ({show, onHide, vacancy}) => {
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
            handler={updateVacancy}
            modalTitle='Обновить вакансию'
            btnName='Обновить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalUpdateVacancy;