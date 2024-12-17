import { useDispatch } from 'react-redux'

import { setCategory, setPriceRange } from '../../redux/productSlice'

import './index.css'

const Categories = [
    {
        id: 100,
        name: "men's clothing",

    },
    {
        id: 101,
        name: "women's clothing",

    },
    {
        id: 102,
        name: "jewelery",

    },
    {
        id: 103,
        name: "electronics",

    },
]

const PriceFilters = [
    {
        id: 1001,
        name: "Price: Low To High",
        order: "asc",
    },
    {
        id: 1002,
        name: "Price: High To Low",
        order: "desc",
    }
]


const FiltersSection = () => {
    const dispatch = useDispatch()
    const handleCategoryChange = event => {
        const selectedCategory = event.target.value;
        dispatch(setCategory(selectedCategory))
        console.log('Selected Category:', selectedCategory);

    }
    const  handleOrderChange = event => {
        const selectedOrder = event.target.value;
        dispatch(setPriceRange(selectedOrder))
        console.log('Selected Price Order:', selectedOrder);
    }

    return(
        <div className='filters-row'>
            <select 
            onChange={handleCategoryChange}
            className='categories-filter' name="Category">
            <option value="">All Categories</option>
            {Categories.map(each => (
            <option className='filters-option' key={each.id} value={each.name}>{each.name}</option>
            ))}
            </select>   
            <select 
             onChange={handleOrderChange}
            className='price-filter' name="Price">
            <option value="">Recommended</option>
            {PriceFilters.map(each => (
            <option className='filters-option' key={each.id} value={each.order}>{each.name}</option>
            ))}
            </select>
        </div>
    )
}

export default FiltersSection