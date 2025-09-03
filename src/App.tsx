import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext"
import PrivateRoute from "./components/privateRoute/privateRoute"
import { LoginContextProvider } from "./context/loginContext/loginContext"
import Login from "./pages/login/Login"

function App() {

  return (
    <LoginContextProvider >
      <ShoppingCartContextProvider>
        <Layout >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            {/* Private route for the cart, only accessible if the user is logged in */}
            {/* If the user is not logged in, they will be redirected to the home page */}
            {/* This is useful for protecting routes that require authentication */}
            {/* such as a shopping cart or user profile page */}
            <Route element={<PrivateRoute />} >
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Layout>
      </ShoppingCartContextProvider>
    </LoginContextProvider>

  )
}

export default App
