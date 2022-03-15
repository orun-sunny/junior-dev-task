import React from 'react';
import { Container } from 'react-bootstrap';
import './TopBarArea.css'
import logo from '../../images/logo.png'

const TopBarArea = () => {
    return (
        <div className="topbar-area">
            <Container>


                <div className="topbar-container" >

                    <div className="topbar-phone-email">
                    <img className="logo" src={logo} alt="" />
                        {/* <div className="phone-icon">
                            <i className="fas fa-phone-square-alt"></i>
                            <span> +1 7201025</span>
                        </div> */}
                        <div className="mail-icon">
                      
                           
                        </div>
                    </div>
                    {/* <div className="topbar-social" >
                        <i className="fab fa-google" > </i>
                        <i className="fab fa-facebook" > </i>
                        <i className="fab fa-facebook-messenger" > </i>
                        <i className="fab fa-whatsapp" > </i>
                        <i className="fab fa-twitter-square"></i>
                    </div> */}

                </div>
            </Container>
        </div >
    );
};

export default TopBarArea;