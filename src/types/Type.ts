export interface ListProduct {
    id: number;
    nameProduct: string;
    list: Products[]; // Gợi ý: nếu `list` là mảng sản phẩm
}

export interface Products {
    id: string;
    name: string;
    image: string;
    price: number;
    discount: number;
    priceDiscount: number;
}