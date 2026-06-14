import { BasicData } from "../shared/basic-data.interface";

export interface ProductInterface extends BasicData {
    id: number,
    thumbnail: string,
    image: string,
    categoryId: number,
    price: number
}