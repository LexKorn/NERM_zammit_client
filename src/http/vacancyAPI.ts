import { $host } from "./index";

export const createVacancy = async (vacancy: FormData) => {
    const {data} = await $host.post('api/vacancy', vacancy); 
    return data;
};

export const deleteVacancy = async (id: number) => {
    const {data} = await $host.delete('api/vacancy/' + id);
    return data;
};

export const updateVacancy = async (id: number, name: string) => {
    const {data} = await $host.put('api/vacancy/' + id, {name});
    return data;
};

export const fetchVacancies = async () => {
    const {data} = await $host.get('api/vacancy');
    return data;
};