'use client'

import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";


export default function Share({url}){

    return(
        <>
            <FacebookShareButton url={url} quote="" className="mx-1">
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={url} quote="" className="mx-1">
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton url={url} quote="" className="mx-1">
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <TelegramShareButton url={url} quote="" className="mx-1">
                <TelegramIcon size={32} round />
            </TelegramShareButton>
            <LinkedinShareButton url={url} quote="" className="mx-1">
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </>
    )
}

