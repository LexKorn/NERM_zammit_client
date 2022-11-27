import { $host } from "./index";

export const createProject = async (project: FormData) => {
    const {data} = await $host.post('api/project', project); 
    return data;
};

export const deleteProject = async (id: number) => {
    const {data} = await $host.delete('api/project/' + id);
    return data;
};

export const updateProject = async (id: number, project: FormData) => {
    const {data} = await $host.put('api/project/' + id, project);
    return data;
};

export const fetchProjects = async () => {
    const {data} = await $host.get('api/project');
    return data;
};