export interface IProduct{
    id: string;
    price: number;
    quantity: number;
}

export interface ICartProduct{
    id: string;
    product: IProduct[];
}