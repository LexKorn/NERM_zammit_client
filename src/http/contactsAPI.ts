import { $host } from "./index";

export const createContacts = async (contacts: FormData) => {
    const {data} = await $host.post('api/contacts', contacts); 
    return data;
};

export const fetchContacts = async (id: number) => {
    const {data} = await $host.get('api/contacts/' + id);
    return data;
};

export const updateContacts = async (id: number, contacts: FormData) => {
    const {data} = await $host.put('api/contacts/' + id, contacts);
    return data;
};