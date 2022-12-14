export const enum Categories {
    CULTURES = 'Объекты здравоохранения, образования, культуры и спорта',
    MFC = 'Многофункциональные комплексы',
    OFFICES = 'Офисные здания',
    HOTELS = 'Отели',
    RESIDENCES = 'Резиденции',
    WILLAGES = 'Загородные резиденции',
    INDUSTRIES = 'Промышленные здания и сооружения',
    AVIA = 'Объекты авиационной инфраструктуры'
};

export interface ICompany {
    id: number;
    description: string;
    departments: string[];
};

export interface IContacts {
    id: number;
    phone: string;
    address: string;
    link: string;
};

export interface IInfoInform {
    id: number;
    infoId: number;
    inform: string;
};

export interface IInfoVolume {
    id: number;
    infoId: number;
    volume: string;
};

export interface IInfo {
    id: number;
    customer: string;
    designer?: string;
    period: string;
    volumes: IInfoVolume[];
    informs: IInfoInform[];
};

export interface IProjectPhoto {
    id: number;
    projectId: number;
    photo: string;
};

export interface IProject {
    id: number;
    name: string;
    task: string;
    location: string;    
    category: string;
    info: IInfo;
    photos: IProjectPhoto[];
};

export interface IServise {
    id: number;
    title: string;
    description: string;
    cover: string;
};

export interface ISlider {
    id: number;
    title: string;
    photo: string;
};

export interface ISystemPhoto {
    id: number;
    systemId: number;
    photo: string;
};

export interface ISystem {
    id: number;
    title: string;
    description: string;
    photos: ISystemPhoto[];
};

export interface IVacancyCondition {
    id: number;
    vacancyId: number;
    condition: string;
};

export interface IVacancyDuty {
    id: number;
    vacancyId: number;
    duty: string;
};

export interface IVacancyRequirement {
    id: number;
    vacancyId: number;
    requirement: string;
};

export interface IVacancy {
    id: number;
    name: string;
    condition: IVacancyCondition[];
    duty: IVacancyDuty[];
    requirement: IVacancyRequirement[];    
};

export interface ICondition {
    id: number;
    condition: string;
};

export interface IDuty {
    id: number;
    duty: string;
};

export interface IRequirement {
    id: number;
    requirement: string;
};