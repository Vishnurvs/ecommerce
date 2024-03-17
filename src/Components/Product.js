import React, { useState } from 'react'
import { products } from '../data/data'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/CartSlice"


function Product() {
    const [menuItems, setMenuItems] = useState(products);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const handleAddToCart = (product) => {
        let totalPrice = product.price;
        const tempProduct = {
            ...product,
            quality: qty,
            totalPrice,
        };
        dispatch(addToCart(tempProduct));
        navigate("/cart")
    }
    const filterItems = (category) => {
        const newItems = products.filter((item) => item.category === category);
        setMenuItems(newItems);

        //For all category
        if (category === 'all') {
            setMenuItems(products);
            return;
        }
    };

    return (
        <div>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="text-center">
                        <div className="row g-4">
                            <div className="col-lg-4 text-start">
                                <h1>Our Organic Product</h1>
                            </div>
                            <div className="col-lg-8 text-end">
                                <ul className='nav nav-pills d-line-flex text-center mb-5'>
                                    <li className='nav-item'>
                                        <a className='d-flex m-2 py-2 bg-light rounded-pill' onClick={() => filterItems('all')}>
                                            <span className='text-dark' style={{ width: "130px" }}>All Products</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a onClick={() => filterItems('Bread')} className='d-flex m-2 py-2 bg-light rounded-pill'>
                                            <span className='text-dark' style={{ width: "130px" }}>Bread</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a onClick={() => filterItems('Fruits')} className='d-flex m-2 py-2 bg-light rounded-pill'>
                                            <span className='text-dark' style={{ width: "130px" }}>Fruites</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a onClick={() => filterItems('Vegetables')} className='d-flex m-2 py-2 bg-light rounded-pill'>
                                            <span className='text-dark' style={{ width: "130px" }}>Vegetables</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a onClick={() => filterItems('Meat')} className='d-flex m-2 py-2 bg-light rounded-pill'>
                                            <span className='text-dark' style={{ width: "130px" }}>Meat</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    {menuItems.map((val, index) => (
                                        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={val.product_img}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt="" />
                                                </div>
                                                <div
                                                    className="text-white px-3 py-1 rounded position-absolute bg-secondary"
                                                    style={{ top: "10px", left: "10px" }}>
                                                    {val.category}
                                                </div>
                                                <div className="border border-secondary border-top-0 p-4 rounded-bottom">
                                                    <h4>{val.product_name}</h4>
                                                    <p>{val.description}</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            ₹ {val.price}
                                                        </p>
                                                        <button onClick={() => handleAddToCart(val)}
                                                            type="btn" className="btn border border-secondary rounded-pill px-3 text-primary">
                                                            <i class="text-primary"><ShoppingBagIcon /></i>  Add to Cart
                                                        </button>
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
        </div>
    )
}

export default Product
