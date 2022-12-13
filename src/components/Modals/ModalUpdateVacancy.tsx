import React, {useState, useEffect} from 'react';

import { updateVacancy } from '../../http/vacancyAPI';
import { IVacancy, IVacancyCondition, IVacancyDuty, IVacancyRequirement } from '../../types/types';
import CUVacancy from '../CUVacancy';

interface ICondition {
    id: number;
    text: string;
};

interface IDuty {
    id: number;
    text: string;
};

interface IRequirement {
    id: number;
    text: string;
};

interface ModalUpdateVacancyProps {
    show: boolean;
    onHide: () => void;
    vacancy: IVacancy;
};

// @ts-ignore
const _transformItem = (item) => {
    if ("condition" in item) {
        return {
            id: item.id,
            text: item.condition
        }
    } else if ("duty" in item) {
        return {
            id: item.id,
            text: item.duty
        }
    } else if ("requirement" in item) {
        return {
            id: item.id,
            text: item.requirement
        }
    }    
};


const ModalUpdateVacancy: React.FC<ModalUpdateVacancyProps> = ({show, onHide, vacancy}) => {
    const [name, setName] = useState<string>('');    
    const [condition, setCondition] = useState<ICondition[]>([]);
    const [duty, setDuty] = useState<IDuty[]>([]);
    const [requirement, setRequirement] = useState<IRequirement[]>([]);

    useEffect(() => {
        setName(vacancy.name);
        // @ts-ignore
        setCondition(vacancy.condition.map(item => _transformItem(item)));
        // @ts-ignore
        setDuty(vacancy.duty.map(item => _transformItem(item)));
        // @ts-ignore
        setRequirement(vacancy.requirement.map(item => _transformItem(item)));
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
            modalTitle='Обновить услугу'
            btnName='Обновить'
            show={show}
            onHide={onHide}
        />
    );
};

export default ModalUpdateVacancy;