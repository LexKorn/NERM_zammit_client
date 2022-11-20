import React from 'react';
import Card from 'react-bootstrap/Card';

import { IVacancy } from '../types/types';

import './vacancyItem.sass';

interface VacancyItemProps {
    vacancy: IVacancy;
    onClick: (vacancy: IVacancy) => void;
};


const VacancyItem: React.FC<VacancyItemProps> = ({vacancy, onClick}) => {    
    return (
        <Card 
            className="d-flex justify-content-between shadow vacancy-card"
            onClick={() => onClick(vacancy)}
        >
            {vacancy.name}
        </Card>
    );
};

export default VacancyItem;