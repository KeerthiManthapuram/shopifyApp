import HeaderSection from '../../components/HeaderSection'

import FiltersSection from '../../components/FiltersSection'

import ProductsContainer  from '../../components/ProductsContainer'

import FooterSection from '../../components/FooterSection'


const Home = () => {
    return( 
        <div className='home-bg-container'>
            <HeaderSection/>
            <FiltersSection />
            <ProductsContainer/>
            <FooterSection/>
        </div>
    )
} 

export default Home