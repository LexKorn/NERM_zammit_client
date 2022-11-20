import React from 'react';
import Card from 'react-bootstrap/Card';

import { IVacancy } from '../types/types';

interface VacancyItemProps {
    vacancy: IVacancy;
    onClick: (vacancy: IVacancy) => void;
};


const VacancyItem: React.FC<VacancyItemProps> = ({vacancy, onClick}) => {    
    return (
        <Card 
            className="d-flex justify-content-between shadow" 
            style={{padding: 10, marginTop: 15, flexDirection: 'row', fontSize: 18, lineHeight: '35px', cursor: 'pointer'}}
            onClick={() => onClick(vacancy)}
        >
            {vacancy.name}
        </Card>
    );
};

export default VacancyItem;