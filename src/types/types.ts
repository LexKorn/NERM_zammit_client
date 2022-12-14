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

export interface ICompanyDepartment {
    id: number;
    companyId: number;
    department: string;
};

export interface ICompany {
    id: number;
    description: string;
    department: ICompanyDepartment[];
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

export interface IInform {
    id: number;
    inform: string;
};

export interface IVolume {
    id: number;
    volume: string;
};

export interface IInfo {
    id: number;
    customer: string;
    designer: string;
    period: string;
    volume: IInfoVolume[];
    inform: IInfoInform[];
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
    photo: IProjectPhoto[];
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

export interface ISystemDescription {
    id: number;
    systemId: number;
    description: string;
};

export interface IDescription {
    id: number;
    description: string;
};

export interface ISystemPhoto {
    id: number;
    systemId: number;
    photo: string;
};

export interface ISystem {
    id: number;
    title: string;
    description: ISystemDescription[];
    photo: ISystemPhoto[];
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