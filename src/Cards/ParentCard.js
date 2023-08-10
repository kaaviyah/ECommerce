import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import Cart from "./Cart";
function ParentCard() {
    const [cartItems, setCartItems] = useState([]);
    const [showProductDetails, setShowProductDetails] = useState("Products");
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState([]);

    const handleAddToCart = (product) => {
        const isAlreadyInCart = products.some(p => p.id === product.id && p.addedToCart);
        if (!isAlreadyInCart) {
            const updatedProducts = products.map(p => p.id === product.id ? { ...p, addedToCart: true } : p);
            setProducts(updatedProducts);
            handleCart(product);

        }

    };
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const handleProductButtonClick = (tab) => {
        setShowProductDetails(tab);

    }
    const handleCartButtonClick = () => {
        setShowProductDetails(false);
    }
    const handleCart = (product) => {
        // console.log(`Added ${pro.title} to the cart!`);

        const itemExists = cartItems.some(item => item.id === product.id);
        if (!itemExists) {
            setCartItems([...cartItems, product]);
        }

    };
    console.log(cartItems);
    const removeFromCart = (product) => {
        const updatedCart = cartItems.filter(item => item.id !== product.id);
        setCartItems(updatedCart);
    }

    return (
        <>

            <div>


                <nav className="navbar">
                    <h1 className="text">MegaMart</h1>

                    <div className="container">
                        <button type="button" className="btn1" onClick={() => handleProductButtonClick("Products")}><h1>Products</h1></button>
                        <button type="button" className="btn2" onClick={() => handleCartButtonClick("Cart")}><h1>Cart</h1></button>
                    </div>

                </nav>

                {

                    showProductDetails === "Products" ?

                        (<Cards

                            handleCart={handleCart}
                            products={products}
                            handleAddToCart={handleAddToCart}
                        />) : (
                            <Cart cartItems={cartItems}
                                removeFromCart={removeFromCart}
                            />)
                }


            </div>


        </>

    );

}
export default ParentCard;