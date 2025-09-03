import { createContext, useContext } from "react";
import React from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage";
// Importing necessary types and hooks
interface IShoppingCartProvider {
    children: React.ReactNode,
}
// Defining the structure of the shopping cart context
// It includes the cart items and functions to manipulate the cart
interface IShoppingCartContext {
    cartItems: ICartItem[],
    handleIncreaseProductQty: (id: number) => void;
    handleDecreaseProductQty: (id: number) => void;
    handleDeleteProduct: (id: number) => void;
    cartQty: number;
}
// Defining the structure of each item in the cart
// Each item has an id and a quantity (qty)
interface ICartItem {
    id: number;
    qty: number;
}
// Creating the context with an initial empty state
// This will be populated by the ShoppingCartContextProvider
export const ShoppingCartContext = createContext({} as IShoppingCartContext);
// Custom hook to use the ShoppingCartContext
// This allows components to easily access the context without needing to import useContext every time
export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
}
// ShoppingCartContextProvider component
// This component will wrap around the parts of the application that need access to the shopping cart context
// It provides the cart items and functions to manipulate them
export function ShoppingCartContextProvider({ children }: IShoppingCartProvider) {
    // State to hold the items in the shopping cart
    // Each item has an id and a quantity (qty)
    const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>( "cartItem" , []);
    // Functions to handle adding, removing, and updating items in the cart

    // Function to increase the quantity of a product in the cart
    // If the product already exists, it increments the quantity
    // If not, it adds a new item with quantity 1
    const handleIncreaseProductQty = (id: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prevItems, { id, qty: 1 }];
        });
    }
    // Function to decrease the quantity of a product in the cart
    // If the product exists and its quantity is greater than 1, it decrements the quantity
    // If the quantity is 1, it removes the item from the cart
    const handleDecreaseProductQty = (id: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.qty > 1) {
                    return prevItems.map(item =>
                        item.id === id ? { ...item, qty: item.qty - 1 } : item
                    );
                }
                return prevItems.filter(item => item.id !== id);
            }
            return prevItems;
        });
    }
    // Function to delete a product from the cart
    // It filters out the item with the specified id from the cart items
    const handleDeleteProduct = (id: number) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    }
    // Calculating the total quantity of items in the cart
    // This is done by summing up the quantity of each item in the cart
    const cartQty = cartItems.reduce((total, item) => total + item.qty, 0);
    // Providing the cart items and functions to the context
    // This allows any component that consumes this context to access the cart items and manipulate them  
    return (
        <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseProductQty , handleDecreaseProductQty , handleDeleteProduct , cartQty }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}