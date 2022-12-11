import { $host } from "./index";

export const createServise = async (servise: FormData) => {
    const {data} = await $host.post('api/servise', servise); 
    return data;
};

export const deleteServise = async (id: number) => {
    const {data} = await $host.delete('api/servise/' + id);
    return data;
};

export const updateServise = async (id: number, servise: FormData) => {
    const {data} = await $host.put('api/servise/' + id, servise);
    return data;
};

export const fetchServises = async () => {
    const {data} = await $host.get('api/servise');
    return data;
};