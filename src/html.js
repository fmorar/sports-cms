import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html lang="es" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <div className="license">
            <div id="ceg-73b5b327-ea40-4537-a0ff-d4bcca00887e" data-ceg-seal-id="73b5b327-ea40-4537-a0ff-d4bcca00887e" data-ceg-image-size="128" data-ceg-image-type="basic-small">
            </div>
            <span>Curaçao eGaming License</span> 
          </div>
        </body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/5b92a682afc2c34e96e8520e/default';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                `,
          }}
        />

        <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://73b5b327-ea40-4537-a0ff-d4bcca00887e.curacao-egaming.com/ceg-seal.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  $(document).ready(function(){
                    function getParameterByName( name ){
                      var regexS = "[\\?&]"+name+"=([^&#]*)", 
                      regex = new RegExp( regexS ),
                      results = regex.exec( window.location.search );
                      if( results == null ){
                      return "";
                      } else{
                      return decodeURIComponent(results[1].replace(/\+/g, " "));
                      }
                    } 
                     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      var noMobile=getParameterByName('noMobile');
                      console.log("[" +  noMobile + "]");
                      if(noMobile != "true"){
                        $('.loginform').attr('action','https://sportsbook.vipsportsbook.com/mQubic/SecurityPage.php');
                      }
                      
                      }
                    } 
                  );
                `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:1040256,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `,
          }}
        />
      </html>
    )
  }
}
