interface Discount {
    percentage: number;
    value: number;
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
