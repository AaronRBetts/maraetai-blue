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
                            <h2>Lorem P. Ipsum</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</i></p>                    
                        </div>
    
                        <div className={section == 1 ? 'active' : ''}>
                            <div className="img"><img src={headshot2} /></div>
                            <h2>Mr. Lorem Ipsum</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</i></p>                    
                        </div>
    
                        <div className={section == 2 ? 'active' : ''}>
                            <div className="img"><img src={headshot3} /></div>
                            <h2>Lorem Ipsum</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</i>.</p>                    
                        </div>
    
                        <div className={section == 3 ? 'active' : ''}>
                            <div className="img"><img src={headshot4} /></div>
                            <h2>Lorem De Ipsum</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</i></p>                    
                        </div>
    
                        <div className={section == 4 ? 'active' : ''}>
                            <div className="img"><img src={headshot5} /></div>
                            <h2>Ms. Lorem R. Ipsum</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</i></p>                    
                        </div>
    
                    </div>
    
                </div>
             </div>
        </div>
  )
}

export default Testimonials