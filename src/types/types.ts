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

export interface IContacts {
    id: number;
    phone: string,
    address: string,
    link: string
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

export interface ISystem {
    id: number;
    title: string;
    description: string;
    photos: string[];
};

export interface IVacancy {
    id: number;
    name: string;
    duties: string[];
    requirements: string[];
    conditions: string[];
};