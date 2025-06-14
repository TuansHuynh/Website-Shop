export interface ListProduct {
    id: number;
    nameProduct: string;
    list: Products[];
}

export interface Products {
    id: string;
    category: string,
    group: string,
    name: string;
    image: string;
    price: number;
    discount: number;
    priceDiscount: number;
}