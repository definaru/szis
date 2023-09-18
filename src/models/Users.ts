import { IData } from './IData'

// export interface IUsers extends Array<{}> {
//     count?: number
//     next?: string;
//     previous?: null;
//     results: never[]
//     // Array<[]> 
//     // Array<IData[]>
//     // extends Array<[]>
//     //  
// }

export interface Characters {
    count?: number
    next?: string | null;
    previous?: string | null;
    results: IData[]
}




