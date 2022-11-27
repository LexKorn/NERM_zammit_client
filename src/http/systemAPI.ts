import { $host } from "./index";

export const createSystem = async (system: FormData) => {
    const {data} = await $host.post('api/system', system); 
    return data;
};

export const deleteSystem = async (id: number) => {
    const {data} = await $host.delete('api/system/' + id);
    return data;
};

export const updateSystem = async (id: number, name: string) => {
    const {data} = await $host.put('api/system/' + id, {name});
    return data;
};

export const fetchSystems = async () => {
    const {data} = await $host.get('api/system');
    return data;
};