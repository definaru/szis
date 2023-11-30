export interface Support {
    text: string;
    phone: string;
    email: string;
}
// export interface IUsers extends Array<{}> {
//     count?: number
//     next?: string;
//     previous?: null;
//     results: never[]
//     // Array<[]> 
//     // extends Array<[]>
//     //  
// }

export interface Characters {
    count?: number
    next?: string | null;
    previous?: string | null;
    results: StartInterface[]
}

export interface Arrays {
    count?: number
    next?: string | null;
    previous?: string | null;
    results: never[]
}

export interface StartInterface {
    name: string;
    description: string;
    version: string;
    domain: string;
    info: string;
    api: string;
    support: Support[];
}

export interface Handbook {
    id: number;
    rank: string;
    user: number;
    photo: string | Blob;
    name: string;
    phone: string;
    division: string;
    location: string;
    status: boolean;
}

export interface User {
    id: number;
    is_superuser: boolean;
    last_login: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
}

export interface OnlyOneUser {
    id: number;
    photo: null | {avatar: string}
    last_login: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phones: [];
    position: string[];
    is_superuser: boolean;
}

export interface Person {
    id: number;
    rank: string;
    user: number;
    photo: string;
    name: string;
    phone: string;
    division: string;
    location: string;
    status: boolean
}


export interface Inform {
    id: number;
    user: number;
    datetime: string;
    name: string;
    script: string;
    message: string;
    method: string;
    caller: string | string[];
}