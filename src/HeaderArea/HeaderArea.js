import React from "react";
import './HeaderArea.css'
import {AiOutlineSearch,AiOutlineWallet,AiFillHome} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import{FaRegFlag,FaUsers,FaPlusCircle,FaBell,FaFacebookMessenger} from 'react-icons/fa'
import MainArea from '../MainArea/MainArea'
function HeaderArea(){
    return(
        <div className="HomePage">
            <div className="header">

                <div className="first-header">
                    <div className="logo">
                        <img src="/images/logo.png" alt="logo" style={{height:"50px",padding:"1rem"}}/>
                    </div>
                    <div className="Search">
                        <AiOutlineSearch style={{height:"4rem"}}/>
                        <input placeholder="Search Facebook" type="Search"/>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="Icons">
                        <AiFillHome fontSize="2.3rem" color="#1877F2"/>
                    </div>
                    <div className="Icons">
                        <FaRegFlag fontSize="2.3rem" color="#1877F2"/>
                    </div>
                    <div className="Icons">
                        <MdOndemandVideo fontSize="2.3rem" color="#1877F2"/>
                    </div>
                    <div className="Icons">
                        <FaUsers fontSize="2.3rem" color="#1877F2"/>
                    </div>
                    <div className="Icons">
                        <AiOutlineWallet fontSize="2.3rem" color="#1877F2"/>
                    </div>
                </div>
                <div className="third-header">

                    <div className="Plus">
                        <FaPlusCircle fontSize="2rem"/>
                    </div>
                    <div className="Pluss">
                        <FaFacebookMessenger fontSize="2rem"/>
                    </div>
                    <div className="Pluss">
                        <FaBell fontsize="2rem"/>
                    </div>
                    <div className="Pluss">
                        <img src="/images/1.jpeg" alt="dp" style={{height:"40px"}}/>
                    </div>
                </div>
            </div>
            <MainArea/>
        </div>
    )
}
export default HeaderArea;