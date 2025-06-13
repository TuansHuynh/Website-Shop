import type { ListProduct, Products } from "../../types/Type";

export const createListProduct = (
    id: number,
    nameProduct: string,
    list: Products[]
): ListProduct => ({
    id,
    nameProduct,
    list
});

export const createProduct = (
    id: string,
    name: string,
    image: string,
    price: number,
    discount: number
): Products => ({
    id,
    name,
    image,
    price,
    discount,
    priceDiscount: price - price * discount
});

export const product: Products[] = [
    createProduct('1', 'Iphone 14 Pro Max', '/Image/Phone/Iphone 14 Pro Max.jpg', 32000000, 0.1),
    createProduct('2', 'Iphone 14', '/Image/Phone/Iphone 14.jpg', 30000000, 0.1),
    createProduct('3', 'Iphone 15 Plus', '/Image/Phone/Iphone 15 Plus.jpg', 35000000, 0.1),
    // createProduct('4', 'Iphone 15', '/Image/Phone/Iphone 15.jpg', 34000000, 0.1),
    // createProduct('5', 'Iphone 16 Plus', '/Image/Phone/iPhone 16 Plus.jpg', 36000000, 0.1),
    // createProduct('6', 'iPhone 16 pro max', '/Image/Phone/iPhone 16 pro max.jpg', 38000000, 0.1),
    // createProduct('7', 'Oppo Find N3 Flip 5g', '/Image/Phone/Oppo Find N3 Flip 5g.jpg', 25000000, 0.1),
    // createProduct('8', 'Oppo Find N3', '/Image/Phone/Oppo Find N3.jpg', 23000000, 0.1),
    // createProduct('9', 'S23 Ultra 5g', '/Image/Phone/S23 Ultra 5g.jpg', 27000000, 0.1),
    // createProduct('10', 'S24 Ultra', '/Image/Phone/S24 Ultra.jpg', 29000000, 0.1),
    // createProduct('11', 'Xiaomi 14 ultra 5g', '/Image/Phone/Xiaomi 14 ultra 5g.jpg', 30000000, 0.1),
    // createProduct('12', 'Xiaomi 14 ultra 5g', '/Image/Phone/Xiaomi 14 ultra.jpg', 30000000, 0.1),
    // createProduct('13', 'Z Flip 6', '/Image/Phone/Z Flip 6.jpg', 32000000, 0.1),
    // createProduct('14', 'Z Fold 5', '/Image/Phone/Z Fold 5.jpg', 34000000, 0.1),
    // createProduct('15', 'Z Fold 6', '/Image/Phone/Z Fold 6.jpg', 34000000, 0.1),
];

export const listProduct: ListProduct[] = [
    createListProduct(1, 'iPhone', product.slice(0, 3)),
];
