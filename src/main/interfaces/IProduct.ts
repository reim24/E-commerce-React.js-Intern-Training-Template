
interface IProduct {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    categoryId: number;
    price: number;
    base64Image: string;
}

export default IProduct;
