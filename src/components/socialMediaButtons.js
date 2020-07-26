import React from 'react'
import {EmailShareButton, FacebookShareButton, TwitterShareButton} from "react-share";
import {FacebookIcon, TwitterIcon, EmailIcon} from "react-share";

// takes in a url and message from App to share on the social media platform
const SocialMediaButtons = (props) => (
    <div className="SocialMediaButtons"
         style={{
             position: 'absolute',
             right: 10,
             margin: '1%'
         }}>
        <TwitterShareButton
            url={props.url}
            title={props.text}
            style={{marginRight: 10}}>
            <TwitterIcon
                size={32}
                left={10}
                round/>
        </TwitterShareButton>
        <FacebookShareButton
            url={props.url}
            title={props.text}
            style={{marginRight: 10}}>
            <FacebookIcon
                size={32}
                round/>
        </FacebookShareButton>
        <EmailShareButton
            url={props.url}
            title={props.text}
            style={{marginRight: 10}}>
            <EmailIcon
                size={32}
                round/>
        </EmailShareButton>
    </div>
)

export default SocialMediaButtons;
