import { $host } from "./index";

export const createCompany = async (company: FormData) => {
    const {data} = await $host.post('api/company', company); 
    return data;
};

export const updateCompany = async (id: number, company: FormData) => {
    const {data} = await $host.put('api/company/' + id, company);
    return data;
};

export const fetchCompany = async (id: number) => {
    const {data} = await $host.get('api/company/' + id);
    return data;
};