import React from 'react'

export default function About() {
    return (
        <>

            <div style={{ width: '99vw', height: '30vh' }} className="d-flex justify-content-center align-items-center bg-dark">
                <h1 className='text-white'>About</h1>
            </div>

            <div className="d-flex">
            <div className="col-md-6 p-5">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae necessitatibus cum consectetur. Optio labore cupiditate praesentium sint quae itaque! Voluptate?</p>
                <button className='bg-dark text-white'>Read More</button>
            </div>

            <div className="col-md-6 p-5">
                <img style={{ width: '40vw', height: '30vh' }}  src="https://www.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages.png" alt="" />
            </div>
            </div>

        </>
    )
}
