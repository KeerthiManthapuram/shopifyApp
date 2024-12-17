import Productslice from '../productSlice'

const action = Productslice.actions

export const fetchProductMiddleware = () => async(dispatch, getState) => {
    try{
        const {searchValue, category, priceRange} = getState().productState
        dispatch(action.productLoading())
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()

        let filteredProducts = products

        if (searchValue){
            filteredProducts = filteredProducts.filter((item) => 
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
        }

        if (category) {
            filteredProducts = filteredProducts.filter((item) => item.category === category)
        }

        if (priceRange) {
            filteredProducts = filteredProducts.sort((a, b) => {
                return priceRange === 'asc' ? a.price - b.price : b.price - a.price
            })
        }

        dispatch(action.productData(filteredProducts))
         
    }
    catch(err){
        dispatch(action.productError())
    }
}


export const fetchProductDetailsMiddleware = (productId) => async(dispatch) => {
    console.log(productId)
    try{
        dispatch(action.productLoading())
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const fetchedData = await response.json()
        console.log(fetchedData)
        dispatch(action.productDetails(fetchedData))
    }catch(err){
        dispatch(action.productError())
    }
}