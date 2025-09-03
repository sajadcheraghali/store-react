import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000"
});

export async function getProducts() {
    const { data } = await client("/products");
    return data;
}

export async function getProduct(id: string | number ) {
    const { data } = await client(`/products/${id}`);
    return data;
}