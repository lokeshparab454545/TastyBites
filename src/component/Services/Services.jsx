import React from 'react'
import './Services.css'


const Services = () => {
    return (
        <div className='services container' id='service'>
            <div className="ser">
                <div className="icon">
                    <i class="ri-motorbike-fill"></i>
                </div>
                <div className="ser-content">
                    <h3>15 Min</h3>
                    <p>Fast Delivery</p>
                </div>
            </div>
            <div className="ser">
                <div className="icon">
                    <i class="ri-cash-fill"></i>
                </div>
                <div className="ser-content">
                    <h3>Rs. 20</h3>
                    <p>Cash Back</p>
                </div>
            </div>
            <div className="ser">
                <div className="icon">
                    <i class="ri-cake-3-line"></i>
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

