import {TailSpin} from 'react-loader-spinner'

import './index.css'

const LoadingSection = () => {
    return(
        <div className='loading-holder'>
            <TailSpin height="50"
            width="50" color="#00C0F0"
            ariaLabel="loading-indicator"/>
        </div>
    )
}

export default LoadingSection