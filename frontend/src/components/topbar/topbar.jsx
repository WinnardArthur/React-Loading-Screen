import React from 'react'
import './topbar.css'
import {
    Mic,
    Search,
    VideoCall,
    Apps,
    Notifications,
} from "@material-ui/icons"
import Skeleton from '../skeleton/skeleton'

const Topbar = ({isLoading, user}) => {
    return (
        <div className="topbar">
            <div className="topLeft">
                <img className="logo" src="https://i.ibb.co/KDtnJVY/logo.png" alt="" />
                <span className="logoText">WinnardTube</span>
            </div>
            <div className="topCenter">
                <div className="topSearch">
                    <input type="text" placeholder="Search" />
                    <div className="topSearchIconContainer">
                        <Search className="topSearchIcon"/>
                    </div>
                    <Mic />
                </div>
            </div>
            {isLoading ? <Skeleton type="top" /> : (
                <div className="topRight">
                <VideoCall className="topIcon" />
                <Apps className="topIcon" />
                <Notifications className="topIcon"/>
                <img src={user.avatar} alt="" className="topImg"/>
            </div>
            )}
            
        </div>
    )
}

export default Topbar;
