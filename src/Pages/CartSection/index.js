
import './index.css'

import { FaCartShopping } from "react-icons/fa6"

import {useSelector} from 'react-redux'

import HeaderSection from '../../components/HeaderSection'

import LoadingSection from '../../components/LoadingSection'

import ErrorSection from '../../components/ErrorSection'


const CartSection = () => {
    const {cartProducts, loading, error} = useSelector((store) => {return store.cartReducer})
    
    if (loading){
        return <LoadingSection/>
    }
    if (error){
        return <ErrorSection/>
    }
    return(
        <div className='cart-bg-container'>
            <HeaderSection />
            <div className='cart-header'>
                <FaCartShopping size="2rem" color="rgb(155, 210, 248)"/>
                <h1 className='cart-heading'>Your Cart, Your Choice!</h1>
                <FaCartShopping size="2rem" color="rgb(155, 210, 248)"/>
            </div>

            {cartProducts.length !== 0? 
            (<table className='cart-products-list'>
                <thead>
                <tr className='header-row'>
                    <th className='header-cell product-cell'>Product</th>
                    <th className='header-cell quantity-cell'>Quantity</th>
                    <th className='header-cell price-cell'>Price</th>
                </tr>
                </thead>
                <tbody>
                {cartProducts.map((eachProduct) => (
                    <tr className='row' key={eachProduct.id}>
                        <td className='product-data-cell'>
                            <img src={eachProduct.image}
                            alt="cart product" className='cProduct-image'/>
                            <div className='cProduct-details'>
                            <p className='cProduct-name'>{eachProduct.title}</p>
                            <p className='cProduct-id'>Product ID: {eachProduct.id}</p>
                            </div>
                        </td>
                        <td className='data-cell'>{eachProduct.indQuantity}</td>
                        <td className='data-cell'>${eachProduct.indQuantity*eachProduct.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )
            : 

            (<div className='empty-cart-view'>
                <img src="https://cserp.sa/images/static/empty-cart.png.gz?v=637659046656913921" 
                alt="empty cart"
                class="cart-image"/>
                <p className='cart-text'>Your cart is empty...but the perfect finds are just a click away!</p>
            </div>)}
            
        
    </div>
    )
}

export default CartSection