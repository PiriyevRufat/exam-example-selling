import React from 'react'
import './Crud.css'
import Card from '../Card/Card'
const Crud = () => {
  return (
    <React.Fragment>
        <div className='crud-section mt-5'>
        <div className="container">
            <div className="row mb-5 justify-content-center">
            <div className="col-6 text-center crud-heading">
                    <h3 className='crud-subtitle'>POPULAR PRODUCTS</h3>
                    <h2 className='crud-title mb-3'>
                    Our Products
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
            </div>
            <div className="row">
                <Card/>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Crud
