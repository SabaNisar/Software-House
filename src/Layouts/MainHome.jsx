import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import './MainHome.css'
import Slider from '../Components/Slider';




const MainHome = ()=>{
    return <div className='main-app'>
                <div className='main-content'>
                    <Header/>
                    <Slider/>
                    <div className='content'>
                    <Outlet/>
                    </div>
                </div>
         </div>
}


export default MainHome;