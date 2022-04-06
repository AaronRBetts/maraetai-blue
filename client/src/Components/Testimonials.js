import React, {useState} from 'react'
import './styles.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import headshot1 from '../images/logo.png'
import headshot2 from '../images/logo.png'
import headshot3 from '../images/logo.png'
import headshot4 from '../images/logo.png'
import headshot5 from '../images/logo.png'

const Testimonials = () => {
    const [section, setSection] = useState(0)

    function scrollNext() {
        if (section < 4)
        setSection(section + 1)
    }

    function scrollPrev() {
        if (section > 0)
        setSection(section - 1)
    }


  function handleClick(e) {
    e.preventDefault()
    setSection(e.target.value)
}

  return (
    <div className="testim">
             <div className="testim-cover">
                <div className="wrap">

                    <ul id="testim-dots" className="dots">
                        <input className={section == 0 ? 'dot active' : 'dot'} value={0} onClick={handleClick}/>
                        <input className={section == 1 ? 'dot active' : 'dot'} value={1} onClick={handleClick}/>
                        <input className={section == 2 ? 'dot active' : 'dot'} value={2} onClick={handleClick}/>
                        <input className={section == 3 ? 'dot active' : 'dot'} value={3} onClick={handleClick}/>
                        <input className={section == 4 ? 'dot active' : 'dot'} value={4} onClick={handleClick}/>
                    </ul>
                    <div id="testim-content" className="cont">
                        
                        <div className={section == 0 ? 'active' : ''}>
                            <div className="img"><img src={headshot1} /></div>
                            <h2>Jason Y</h2>
                            <p><i>Absolutely fantastic service, kind and accommodating. Highly recommended using them </i></p>                    
                        </div>
    
                        <div className={section == 1 ? 'active' : ''}>
                            <div className="img"><img src={headshot2} /></div>
                            <h2>Kimberley B</h2>
                            <p><i>They have the BEST service and friendliest team. We would not go anywhere else! All the support for this hardworking family business!</i></p>                    
                        </div>
    
                        <div className={section == 2 ? 'active' : ''}>
                            <div className="img"><img src={headshot3} /></div>
                            <h2>Evie T</h2>
                            <p><i>These guys!👍👍 Public holiday and my tank runs out. Didn’t even Hesitate. Just advised they’d be a couple of hours!
I’ve got 4 kiddies in the house, it’s hot and no water would have been unbearable!
So Grateful for business like this that go above and beyond!</i>.</p>                    
                        </div>
    
                        <div className={section == 3 ? 'active' : ''}>
                            <div className="img"><img src={headshot4} /></div>
                            <h2>Malindi E</h2>
                            <p><i>Super helpful, on short notice, after a leak emptied our tank. Very friendly people - highly recommend them to anyone needing to order water.</i></p>                    
                        </div>
    
                        <div className={section == 4 ? 'active' : ''}>
                            <div className="img"><img src={headshot5} /></div>
                            <h2>Quinton W</h2>
                            <p><i>Been using their service since 2009. Always friendly and prompt service.</i></p>                    
                        </div>
    
                    </div>
    
                </div>
             </div>
        </div>
  )
}

export default Testimonials