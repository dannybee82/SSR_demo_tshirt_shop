import { BasicData } from "../shared/basic-data.interface";

export interface Product extends BasicData {
    id: number,
    thumbnail: string,
    image: string,
    categoryId: number,
    price: number
}