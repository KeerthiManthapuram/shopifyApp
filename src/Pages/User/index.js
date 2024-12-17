import React from 'react'

import { useSelector } from 'react-redux'

import {useNavigate} from 'react-router-dom'

import HeaderSection from '../../components/HeaderSection'

import LoadingSection from '../../components/LoadingSection'

import ErrorSection from '../../components/LoadingSection'

import { FaRegArrowAltCircleRight, FaUserCircle } from "react-icons/fa"

import './index.css'

const User = () => {
    const { user, loading, error } = useSelector((store) => store.auth);
    const navigate = useNavigate()

    const handleExplore = () => {
        navigate('/')
    }

    if (loading){
        return <LoadingSection/>
    }
    if (error){
        return <ErrorSection/>
    }
    return(
        <div className='user-bg-holder'>
            <HeaderSection/>
            <div className='profile-card-section'>
                <p className='greeting'>Hello {user.name}!  Don’t miss our exclusive deals today!</p>
                <button className='explore-btn' onClick={handleExplore}>
                    Explore 
                    <FaRegArrowAltCircleRight size="1rem" color="#529ece" 
                    style={{marginLeft: "0.5rem"}}/>
                </button>
               
            <div className="profile-card">
            <FaUserCircle className="user-picture"/>
            <p className='user-text'>{user.name}</p>
            <p className='user-text'>{user.email}</p>
            </div>
            </div>
        </div>
    )
}

export default User