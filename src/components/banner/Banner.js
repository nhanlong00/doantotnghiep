import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-banner position-relative p-3'>
                            <img src={require('../../assets/images/main-banner-1.jpg')}
                                className='img-fluid rounded-3'
                                alt='main-banner' />
                            <div className='main-banner-content position-absolute'>
                                <h3 className='banner-title'>Sale sập sàn</h3>
                                <p className='banner-desc'>Chương trình khuyến mại giảm giá sốc</p>
                                <Link className='btn btn-slider btn-secondary'>Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex flex-wrap justify-content justify-content-between align-item-center'>
                            <div className='col-6'>
                                <div className='smaill-banner position-relative p-3'>
                                    <img src={require('../../assets/images/catbanner-01.jpg')}
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='smaill-banner position-relative p-3'>
                                    <img src={require('../../assets/images/catbanner-02.jpg')}
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='smaill-banner position-relative p-3'>
                                    <img src={require('../../assets/images/catbanner-03.jpg')}
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='smaill-banner position-relative p-3'>
                                    <img src={require('../../assets/images/catbanner-04.jpg')}
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner