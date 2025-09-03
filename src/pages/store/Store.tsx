import { useState , useEffect } from "react";
import Container from "../../components/container/Container"
import ProductItem from "../../components/productItem/productItem"
import { Link } from "react-router-dom"
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/server";
function Store() {

  const[products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    })
  }, []);
  return (
    <>
    <h1 className="text-right mt-5">جدیدترین محصولات</h1>
      <Container >
        <div className="grid grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductItem {...product} />
          </Link>
        ))}
        </div>
      </Container>


    </>
  )
}

export default Store