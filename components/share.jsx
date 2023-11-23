'use client'

import {ShareSocial} from 'react-share-social' 

const style = {
    root: {
      padding: '0',
    },
    copyContainer: {
      display: 'none'
    },
  };

export default function Share({url}){

    return(
        <>
            <ShareSocial 
                style = {style}
                  url = {url}
                  socialTypes={['facebook','whatsapp','telegram',,'twitter','reddit','linkedin']}
                />
        </>
    )
}

