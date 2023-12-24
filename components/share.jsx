'use client'

// import {ShareSocial} from 'react-share-social' 
import ShareOnSocial from "react-share-on-social";

// const style = {
//     root: {
//       padding: '0',
//     },
//     copyContainer: {
//       display: 'none'
//     },
//   };

export default function Share({url, post}){

    return(
        <>
            {/* <ShareSocial 
                style = {style}
                  url = {url}
                  socialTypes={['facebook','whatsapp','twitter','telegram']}

                /> */}

          <ShareOnSocial
                textToShare={post?.frontmatter.title}
                link={url}
                linkTitle={post?.frontmatter.title}
                linkMetaDesc={post?.frontmatter.headline}
                linkFavicon={`https://thegatewaypeople.com/${post?.frontmatter.image}`}
                noReferer
              >
                <button><img className="w-32" src="/share.jpeg" /> </button>
              </ShareOnSocial>
        </>
    )
}

