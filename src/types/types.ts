export interface IVacancy {
    id: number;
    name: string;
    duty: string;
    requirement: string;
    conditions: string;
};

export interface IInfo {
    customer: string;
    designer?: string;
    period: string;
    volumes: string[];
    information: string[];
};

export interface IProject {
    id: number;
    name: string;
    task: string;
    location: string;
    photos: string[],
    category: string;
    info: IInfo;
};

export enum Categories {
    CULTURES = 'Объекты здравоохранения, образования, культуры и спорта',
    MFC = 'Многофункциональные комплексы',
    OFFICES = 'Офисные здания',
    HOTELS = 'Отели',
    RESIDENCES = 'Резиденции',
    WILLAGES = 'Загородные резиденции',
    INDUSTRIES = 'Промышленные здания и сооружения',
    AVIA = 'Объекты авиационной инфраструктуры'
};