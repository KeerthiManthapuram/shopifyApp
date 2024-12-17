import './index.css'

const ErrorSection = () => {
    return(
        <div className='error-bg-holder'>
           <img src="https://cdn.vectorstock.com/i/preview-1x/94/23/error-web-page-404-server-mistake-modern-alert-vector-41979423.jpg"
           alt="error-404" className='error-picture'/>
           <p className='error-text'>Oops! Something went wrong.</p>
        </div>
    )
}

export default ErrorSection