import './index.css'
import React from 'react';
import { FcGlobe } from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux';
import { updateField, login } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginSection = () => {
    const name = useSelector((store) => store.auth.user.name);
    const email = useSelector((store) => store.auth.user.email);
    const error = useSelector((store) => store.auth.error);
    const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);


    console.log(name);
    console.log(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (field, value) => {
        dispatch(updateField({ field, value })); 
    };

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const resultAction = await dispatch(login({ name, email }));
            console.log('Result Action:', resultAction); 
    
            if (login.fulfilled.match(resultAction)) {
                console.log('Login successful:', resultAction.payload);
                navigate('/');
            } else if (login.rejected.match(resultAction)) {
                console.error('Login failed:', resultAction.payload);
                dispatch(updateField({ field: 'error', value: resultAction.payload || 'Something went wrong!' }));
            }
        } catch (error) {
            console.error('Error in handleLogin:', error.message);
        }
    };

    return(
        <div className='login-bg-container'>
            <header className='login-header-holder'>
            <h1 className='form-caption'>SH<FcGlobe className='website-logo'/>PPIFY</h1>
            </header>
            <div className='login-content'>
            <div className='login-image-holder'>
                <img src="https://assets.sonary.com/wp-content/uploads/2021/03/31080810/eCommerce-site-1-1.jpg"
                alt="login" className='login-image'/>
            </div>
            <div className='login-card-holder'>
                <form className='form-holder'>
                    
                <label htmlFor="username" className='label'>Username</label>
                <input id="username" type="text" className='user-input'
                value={name} 
                onChange={(e) => handleInputChange('name', e.target.value)}/>
                <label htmlFor="email" className='label'>Email Id</label>
                <input id="email" type="text" className='user-input'
                value={email} 
                onChange={(e) => handleInputChange('email', e.target.value)}/>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className='login-btn' onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default LoginSection