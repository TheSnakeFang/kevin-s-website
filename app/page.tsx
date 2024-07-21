import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const HomePage: React.FC = () => {
  return (
    <div>
        <Head>
          <meta charSet="utf-8"/>
          <title>Home</title>
          <meta content="Home" property="og:title"/>
          <meta content="Home" property="twitter:title"/>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
          <meta content="Webflow" name="generator"/>
          <link href="/uploads/docs/css/kevinfangwebsite.webflow.2bfe15bad.css" rel="stylesheet" type="text/css"/>
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive"/>
        <Script strategy="beforeInteractive">
          {`WebFont.load({
            google: {
              families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Anton:regular","Work Sans:regular,500,600,900","Inter:200,300,regular,500,800,900"]
            }
          });`}
        </Script>
        <Script strategy="beforeInteractive">
          {`!function(o,c){
            var n=c.documentElement,t=" w-mod-";
            n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")
          }(window,document);`}
        </Script>
        </Head>
        <div className="body-2">
          <div data-bind="9837158a-c8d2-7165-5b76-09290f78aa1c" className="mouse-cursor-container">
            <div className="mouse-cursor-wrapper">
              <div className="mouse-cursor">
                <img src="/uploads/docs/6119ef28f83bf76bd01d415f_orizon_cursor.png" loading="lazy" alt="" className="cursor-icon"/>
              </div>
            </div>
          </div>
          <div data-collapse="medium" data-animation="over-right" data-duration="400" role="banner" className="navbar-2 w-nav">
            <div className="container-2 w-container">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <a href="index.html" aria-current="page" className="nav-link w-nav-link w--current">Home</a>
                <a href="https://blog.kevinfang.tech/" target="_blank" className="nav-link _1 w-nav-link">Blog</a>
                <a href="/uploads/docs/Fang_Kevin_Resume.pdf" target="_blank" className="nav-link _2 w-nav-link">Resume</a>
                <a href="portfolio.html" className="nav-link _3 w-nav-link">Portfolio</a>
                <a href="https://www.linkedin.com/in/hirekevinfang/" target="_blank" className="nav-link _1 w-nav-link">Linkedin</a>
                <a href="https://github.com/TheSnakeFang" target="_blank" className="nav-link _1 w-nav-link">Github</a>
                <a href="mailto:kevinfang@cmu.edu" className="nav-link-3 w-nav-link">Contact</a>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="icon w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
          <div className="section stairs wf-section">
            <div className="first-line-new">
              <div className="stair-heading">
                Kevin Fang<br/>Developer<br/>Journalist<br/>Designer<br/>Student<br/>Writer<br/>Artist<br/><br/>
              </div>
            </div>
            <div className="second-line-new">
              <div className="stair-heading second">
                Kevin Fang<br/>Developer<br/>Journalist<br/>Designer<br/>Student<br/>Writer<br/>Artist<br/><br/>
              </div>
            </div>
            <div className="third-line-new">
              <div className="stair-heading third">
                Kevin Fang<br/>Developer<br/>Journalist<br/>Designer<br/>Student<br/>Writer<br/>Artist<br/><br/>
              </div>
            </div>
            <div className="second-line-new two">
              <div className="stair-heading forth">
                Kevin Fang<br/>Developer<br/>Journalist<br/>Designer<br/>Student<br/>Writer<br/>Artist<br/><br/>
              </div>
            </div>
            <div className="third-line-new two">
              <div className="stair-heading fifth">
                Kevin Fang<br/>Developer<br/>Journalist<br/>Designer<br/>Student<br/>Writer<br/>Artist<br/><br/>
              </div>
            </div>
          </div>
          <div className="section full-height wf-section"></div>
          <div className="section full-height wf-section"></div>
          <div className="section full-height wf-section"></div>
          <div className="section full-height wf-section"></div>
          <Script 
            src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=docs" 
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" 
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          ></Script>          
          <Script src="/uploads/docs/js/webflow.3d193b734.js" strategy="beforeInteractive"></Script>
        </div>
    </div>
  );
};

export default HomePage;