import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useState, useEffect } from "react";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {

  const { handleIncreaseProductQty, cartItems} = useShoppingCartContext();
  // Extracting the product ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    getProduct(id as string ).then((result) => {
      setProduct(result);
    })
  }, []);
  return (
    <>
      <Container  >
        <div className='h-96 shadow mt-4 grid grid-cols-12 '>
                <div className="p-4 col-span-10 ">
                  <h2 className="">{product?.title}</h2>
                  <p className=" mt-2">{product?.price} $</p>
                  <p className=" mt-2 text-gray-500">{product?.description}</p>
                </div>
                <div className="col-span-2 p-4 ">
                  <div className="h-max-64 w-max-64 mx-auto">
                    <img className="w-full h-full" src={product?.image} alt="" />
                  </div>
                  <div>
                    {
                      cartItems.find(item => item.id === parseInt(id as string)) ?
                      <p className="text-center  mt-2">این محصول در سبد خرید شما موجود است</p>
                      :
                    <Button onClick={() =>handleIncreaseProductQty(parseInt(id as string)) } className="mt-2 w-full !py-4" variant="primary" style={{ backgroundColor: "red" }} >افزودن به سبد خرید</Button>
                    }
                  </div>
                </div>
              </div>
      </Container>
    </>
  )
}

export default Product