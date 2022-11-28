import { $host } from "./index";

export const createServise = async (servise: FormData) => {
    const {data} = await $host.post('api/servise', servise); 
    return data;
};

export const deleteServise = async (id: number) => {
    const {data} = await $host.delete('api/servise/' + id);
    return data;
};

export const updateServise = async (id: number, name: string) => {
    const {data} = await $host.put('api/servise/' + id, {name});
    return data;
};

export const fetchServises = async () => {
    const {data} = await $host.get('api/servise');
    return data;
};