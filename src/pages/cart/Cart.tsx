import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
    const { cartItems } = useShoppingCartContext();
  
    return (
        <Container>
          {
          cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))
          }
            <div className="text-right bg-gray-200 rounded p-6">
                <p>قیمت کل : 200</p>
                <p>تخفیف شما : 10</p>
                <p>قیمت نهایی : 200</p>
            </div>
            <Button variant="success"className="my-2">
                ثبت سفارش
            </Button>
        </Container>
    )
}

export default Cart