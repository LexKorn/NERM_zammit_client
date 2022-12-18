import { makeAutoObservable } from 'mobx';

export default class AdminStore {
    _isAuth: boolean;
    _id: number;
    _email: string;

    constructor() {
        this._isAuth = false;
        this._id = 1;
        this._email = '';
        
        makeAutoObservable(this);
    };

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    };
    setId(num: number) {
        this._id = num;
    };
    setEmail(email: string) {
        this._email = email;
    };

    get isAuth() {
        return this._isAuth;
    };
    get id() {
        return this._id;
    };
    get email() {
        return this._email;
    };
};