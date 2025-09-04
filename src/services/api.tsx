import axios from "axios";

const client = axios.create({
  baseURL: "https://raw.githubusercontent.com/sajadcheraghali/store-react/main"
});

export async function getProducts() {
  const { data } = await client.get("/db.json");
  return data.products; 
}

export async function getProduct(id: string | number) {
  const { data } = await client.get("/db.json");
  return data.products.find((p: any) => p.id === String(id));
}
