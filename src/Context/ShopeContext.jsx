import React, { useState } from "react";
import { createContext } from "react";
import all_product from '../assets/all_product';
export const ShopeContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
const ShopeContextProvider = (props) => {
    const [cart, setcart] = useState(getDefaultCart());

    const Addtocart = (itemId) => {
        setcart((prev) => ({
            ...prev, [itemId]: prev[itemId] + 1
        }))
        console.log(cart)
    }
    const Removetocart = (itemId) => {
        setcart((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }))
    }

    const getTotalAmount = () =>{
        let totalamount = 0;
        for(const item in cart){
            if(cart[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalamount += cart[item] * itemInfo.new_price;
            }
           
        }
        return totalamount;
    }

    const getTotalitem = () =>{
        let totalitem = 0;
        for(const item in cart){
            if(cart[item]>0){
                totalitem += cart[item];
            }
           
        }
        return totalitem;
    }

    const contextValue = {getTotalitem, getTotalAmount, all_product, cart, Addtocart, Removetocart };

    return (
        <ShopeContext.Provider value={contextValue}>
            {props.children}
        </ShopeContext.Provider>
    );
}

export default ShopeContextProvider;