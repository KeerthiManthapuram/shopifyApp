import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {useNavigate} from 'react-router-dom'

import {fetchProductMiddleware} from '../../redux/middleware/productsMiddleware'

import LoadingSection from '../LoadingSection'

import ErrorSection from '../ErrorSection'

import './index.css'


const ProductsContainer = () => {

    const {loading, error, products, searchValue, category, priceRange} = useSelector((store) => {return store.productState})

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(function(){
        dispatch(fetchProductMiddleware());
   },[dispatch, searchValue, category, priceRange])
   
   const handleProductClick = (productId) => {
    navigate(`product-details/${productId}`)
   }


   if (loading){
    return <LoadingSection />
   }

   if(error) {
    return <ErrorSection/>
   }

    return(
        products.length === 0 ? 
            (
                <div className='no-search-result-view'>
                    <img src="https://i.pinimg.com/originals/52/4c/6c/524c6c3d7bd258cd165729ba9b28a9a2.png"
                    alt="not-found-search" className='no-results-image' />
                    <p className='no-search-items-text'>Hmm... looks like we’ve hit a blank. Search again with new terms?</p>
                </div>
            ):
            (
        <ul className='products-list'>
            {products.map(eachItem => (
                <li className="product-card" 
                key={eachItem.id}
                onClick={() => handleProductClick(eachItem.id)}>
                    <div className='product-home-img-container'>
                    <img src={eachItem.image}
                    alt="product thumbnail" 
                    className="products-images"/>
                    </div>
                    <div className='product-text-holder'>
                    <p className='product-name'>{eachItem.title}</p>
                    <p className='price'>${eachItem.price}</p>
                   </div>
                </li>
            ))}
        </ul>
            )
         
    )
}

export default ProductsContainer