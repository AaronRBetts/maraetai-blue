import React from 'react'
import '../Pages/styles.css'

const HomeContent = () => {
  return (
    <div className="contentSection">
        <div className="contentWrapper">
            <div className='content'>
                <h2>Fresh Maraetai Blue Tank Water</h2>
                <p>The water we provide is high standard, Ministry of Health approved, pristine drinking water. </p>
                <p>Sourced from Ministry of Heath Approved suppliers and delivered in stainless steel tanks that are all individually tested and meet national food grade hygiene standards. </p>
                <p>Whether you are commercial or residential our water will live up to all expectations .</p><br />
                <button className="btn-secondary">
                    <a href="/services">
                    Learn More
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HomeContent