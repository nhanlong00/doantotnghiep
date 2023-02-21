import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Banner from '../components/banner/Banner'


const Home = () => {
    return (
        <div className='main'>
            <section className='section-1 py-5'>
                <Banner />
            </section>
        </div>
    )
}

export default Home