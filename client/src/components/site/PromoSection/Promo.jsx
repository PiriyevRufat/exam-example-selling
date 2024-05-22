import React from 'react'
import './Promo.css'
const Promo = () => {
  return (
    <div className='promo-sect'>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center piri-babanin-nagillari">
                <h3 className='promo-subtitle'>SPECIAL PROMO</h3>
                    <h2 className='promo-title mb-3'>
                    Summer Sale
                    </h2>
                    <p className='promo-desc'>Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                    <div className='timer-promo'>
                        <span className='countdown-block'><span className="label">00</span>weeks</span>
                        <span><span className="label">00</span>weeks</span>
                        <span><span className="label">00</span>days</span>
                        <span><span className="label">00</span>hours</span>
                        <span><span className="label">00</span>weeks</span>
                    </div>
                    <a href="" className='promo-btn'>SHOP NOW</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promo
