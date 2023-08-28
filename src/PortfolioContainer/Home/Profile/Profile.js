import React from 'react';
import Typical from 'react-typical';
import './Profile.css';


export default function Profile() {
  return (
<div className='profile-container my-component'  >
    <div className='profile-parent'>
        <div className='profile-details'>
            <div className='colz'>
            <div className='colz-icon'>


            <a href='https://www.linkedin.com/in/nikhilnaik211097/'>
            <i className="fa fa-linkedin"></i>
                    </a>

                    <a href='https://github.com/NikhilNaik21'>
                        
                       
                        <i className="fa fa-github"></i>
                    </a>

                    <a href='https://www.hackerrank.com/nikhilnaik5966?hr_r=1'>
                        <i className="fa fa-header"></i>
                    </a>

                    {/* <a href=''>
                        <i className='fa fa-instagram'></i>
                    </a> */}
            </div>

            </div>

       

<div className='profile-details-name'>
<span className='primary-text'>
                    {" "}
                    Hi 👋, I'm <span className='highlighted-text'>Nikhil R Naik</span>  
                  </span>
</div>

<div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        <Typical 
                        loop={Infinity}
                        steps ={[
                            "Amateur Developer 👨‍💻",
                            2500,
                            "Enthusiastic Developer 🧑🏼‍💻",
                            2500,

                        ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>Knock of building applications with front end and back end operations.</span>
                </span>

            </div>

            <div className='profile-options'>
                <button className='btn primary-btn'>
                    Hire Me{" "}
                </button>
             {/* /* resume */ }
                <a href='NikhilRNaik23.pdf' download='NikhilRNaik23.pdf'>
                    <button className='btn primary-btn'>Get Resume</button>
                </a>
            </div>

</div>



<div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
        </div>
        
    </div>
    
</div>

)
}
