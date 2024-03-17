import React, { useState } from 'react'
import { products } from '../data/fruitsData'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/CartSlice"

function Fruits() {
    const [menuItems, setMenuItems] = useState(products);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const handleAddToCart = (product) => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product,
            qunatity: qty,
            totalPrice,
        };
        dispatch(addToCart(tempProduct));
        navigate("/cart");
    }



    return (
        <div>


            <div className="container-fluid fruite py-5"><br/><br/><br/>
                
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-9">
                            <div className="row g-4 justify-content-left">
                                {products.map((item, index) => (
                                    <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img
                                                    src={item.product_img}
                                                    className="img-fluid w-100 rounded-top"
                                                    alt="{item.product_img}"
                                                />
                                            </div>
                                            <div
                                                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                style={{ top: "10px", left: "10px" }}
                                            >
                                                {item.category}
                                            </div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>{item.product_name}</h4>
                                                <p>{item.description}</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">
                                                        ₹{item.price} / kg
                                                    </p>
                                                    <a
                                                        onClick={() => handleAddToCart(item)}
                                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                                    >
                                                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Fruits
