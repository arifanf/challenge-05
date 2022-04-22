import React from 'react'
import './Car.css'

import BCR_Car from '../../Assets/bcr_car.svg'

const Car = () => {
  return (
    <div class="first-section">
        <div class="first-section-container">
            <div class="col banner">
                <div class="main-title-1">Sewa & Rental Mobil Terbaik di</div>
                <div class="main-title-2">Kawasan Semarang</div>
                <div class="main-description">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
            </div>
            <div class="col-auto car-container pr-0 mb-0">
                <img src={BCR_Car} className="car-container-inner" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Car