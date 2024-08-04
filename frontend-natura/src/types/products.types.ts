interface Discount {
    percentage: number;
    value: number;
    exists: boolean;
}

interface Image {
    url: string;
    children: boolean;
}

export interface IProductType {
    id: string;
    title: string;
    brand: string;
    price: number;
    discount: Discount;
    ratting: string;
    image: Image[];
    description: string;
}
