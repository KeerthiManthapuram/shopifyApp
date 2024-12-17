import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {action} from '../../redux/cartSlice'

import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs"

import { FaStar } from "react-icons/fa"

import { useParams } from 'react-router-dom'

import HeaderSection from '../../components/HeaderSection'

import {fetchProductDetailsMiddleware} from '../../redux/middleware/productsMiddleware'

import LoadingSection from '../../components/LoadingSection'

import ErrorSection from '../../components/ErrorSection'


import './index.css'

const ProductDetailsView = () => {
    const {loading, error, details} = useSelector((store) => {return store.productState})
    const { cartProducts} = useSelector((store) => store.cartReducer)
    const { id: productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(fetchProductDetailsMiddleware(productId));
        }
    }, [dispatch, productId]);

   
    const handleAddToCart = () => {
    
    if (details) {
        const clonedDetails = { ...details };
        dispatch(action.addToCart(clonedDetails))
    }
   }
    
    const handleAddProduct = () => {
        if (details) {
        dispatch(action.increaseQuantity({ id:  details.id}));
        }
    }

   const handleRemoveProduct = () => {
        if (details) {
        dispatch(action.decreaseQuantity({ id: details.id }));
        }
    }


   if (loading){
    return <LoadingSection/>
   }

   if (error){
    return <ErrorSection/>
   }

    return(
        <div className='product-details-bg-container'>
            <HeaderSection/>
            {details &&
            (<div className='image-data-holder'>
                <div className='image-holder'>
                    <img src={details.image} 
                    alt="product image" 
                    className='product-image'/>
                </div>
                <div className='text-holder'>
                    <h1 className='name'>{details.title}</h1>
                    <p className='price'>${details.price}</p>
                    <p className='description'>{details.description}</p>
                    <p className='rating'>Rating: {details.rating?.rate}
                        <FaStar className='star'/>
                    </p>
                    <div className='cart-count-holder'>
                        <button className='count-btn'>
                        <BsFillCartDashFill className='cart-icon' onClick={handleRemoveProduct}/>
                        </button>
                        <p className='count'>
                            {<PrintCount cartProducts={cartProducts} id={productId} />}
                        </p>
                        <button className='count-btn'>
                        <BsFillCartPlusFill className='cart-icon'
                        onClick={handleAddProduct}
                        disabled={!cartProducts.some((cProduct) => cProduct.id === productId)}/>
                        </button>
                    </div>
                    <button className='button' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
            </div>
            )}           
        </div>
    )
}


function PrintCount({ cartProducts, id }) {
    const product = cartProducts.find((cProduct) => String(cProduct.id) === String(id));
    return <>{product ? product.indQuantity : 0}</>;
}

export default ProductDetailsView