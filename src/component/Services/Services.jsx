import React from 'react'
import './Services.css'
import { MdEmojiFoodBeverage } from 'react-icons/md'
import {FaBicycle} from 'react-icons/Fa';
import {GiHotMeal} from 'react-icons/Gi';
import {GiMoneyStack} from 'react-icons/Gi';
  

const Services = () => {
    return (
        <div className='services container' id='service'>
            <div className="ser">
                <div className="icon">
                    <FaBicycle/>
                </div>
                <div className="ser-content">
                    <h3>15 Min</h3>
                    <p>Fast Delivery</p>
                </div>
            </div>
            <div className="ser">
                <div className="icon">
                    <GiMoneyStack className='main-icon' />
                </div>
                <div className="ser-content">
                    <h3>Rs. 20</h3>
                    <p>Cash Back</p>
                </div>
            </div>
            <div className="ser">
                <div className="icon">
                    <GiHotMeal />
                </div>
                <div className="ser-content">
                    <h3>20 Min</h3>
                    <p>Fresh Food</p>
                </div>
            </div>
        </div>
    )
}


export default Services

