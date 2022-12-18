import { $host } from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (email: string, password: string) => {
    const {data} = await $host.post('api/admin/register', {email, password}); 
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const updateLogin = async (email: string, password: string, id: number) => {
    const {data} = await $host.put('api/admin/login/' + id, {email, password});
    localStorage.setItem('token', data.token);    
    return jwt_decode(data.token);
};

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('api/admin/login', {email, password});
    localStorage.setItem('token', data.token);    
    return jwt_decode(data.token);
};