import React from "react";
import '../../Styles/SidePanel.css';
const SidePanel = () => {
    return(
        <div class="wrapper">
            <div class="sidebar">
                {/* <div class="profile">
                    <img src="WhatsApp Image 2023-03-20 at 10.28.45 PM.jpeg" alt="Logo" >
                    <h3>Web Music</h3>
                </div> */}
               
                <ul>
                    <li>
                        <a href="/music" class="active">
                            <span class="item">Home</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <span class="item">Library</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="item">History</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="item">Songs</span>
                        </a>
                    </li> */}
                    <li>
                        <a href="/album">
                            <span class="item">Albums</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <span class="item">Playlist</span>
                        </a>
                    </li> */}
    
                    <li>
                        <a href='chat'>
                            <span class="item">Chat</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SidePanel