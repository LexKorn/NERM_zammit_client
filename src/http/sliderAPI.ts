import { $host } from "./index";

export const createSlider = async (slider: FormData) => {
    const {data} = await $host.post('api/slider', slider); 
    return data;
};

export const deleteSlider = async (id: number) => {
    const {data} = await $host.delete('api/slider/' + id);
    return data;
};

export const updateSlider = async (id: number, name: string) => {
    const {data} = await $host.put('api/slider/' + id, {name});
    return data;
};

export const fetchSliders = async () => {
    const {data} = await $host.get('api/slider');
    return data;
};