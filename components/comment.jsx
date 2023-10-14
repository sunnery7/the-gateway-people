'use client'

import Script from "next/script";


export default function Comment({url, slug}){
    
    return(
        <>
            <div id="disqus_thread"></div>
            <Script id="disqus">
                {`
                var disqus_config = function () {
                this.page.url = ${url}; 
                this.page.identifier = ${slug}; 
                };
                
                (function() { 
                var d = document, s = d.createElement('script');
                s.src = 'https://the-gateway-people.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
                })();`}
            </Script>
        </>
    )
}