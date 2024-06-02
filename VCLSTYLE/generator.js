
function CreateWhatsappChatWidget(option = {
    brandSetting: {
        backgroundColor: "#085B53",
        brandImg: "",
        brandImgData: null,
        brandName: "edna",
        brandSubTitle: "Typically replies within a day",
        ctaText: "Start Chat",
        phoneNumber: "",
        welcomeText: "Customise chat button settings - Choose chat button design"
    },
    chatButtonSetting: {
        backgroundColor: "#4FCE5D",
        ctaText: "",
        icon: "whatsapp",
        position: "left"
    },
    enabled: false
}) {
    if (option.enabled == false){
        return;
    }
    var css = document.createElement("STYLE");
    if(window.jQuery){
        initWidget();
    }else{
        var script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            initWidget();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    function initWidget(){
        let now = new Date();
        now = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        now = now.replace(/:/g, '.');
        option.time = now;
        jQuery('body').append(`<div id="whatsapp_chat_widget">
            <div id="wa-widget-send-button" class="${option.chatButtonSetting.icon}">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="whatsapp">
                    <g clip-path="url(#clip0_4078_319)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5813 5.70264C7.39708 5.29485 7.20311 5.28669 7.02785 5.27955C6.88449 5.27343 6.72038 5.27381 6.55652 5.27381C6.39254 5.27381 6.12606 5.33516 5.90071 5.58019C5.67524 5.82521 5.03979 6.41755 5.03979 7.62225C5.03979 8.82708 5.92121 9.99123 6.04407 10.1547C6.16706 10.318 7.74554 12.8693 10.2454 13.8507C12.323 14.6664 12.7458 14.5042 13.1968 14.4634C13.6477 14.4225 14.6519 13.8711 14.8568 13.2993C15.0618 12.7277 15.0618 12.2376 15.0003 12.1352C14.9388 12.0331 14.7748 11.9719 14.5289 11.8495C14.2829 11.727 13.0738 11.1346 12.8483 11.0529C12.6228 10.9713 12.4588 10.9305 12.2948 11.1756C12.1309 11.4205 11.6598 11.9719 11.5163 12.1352C11.3728 12.2988 11.2293 12.3192 10.9833 12.1968C10.7374 12.074 9.94523 11.8157 9.00554 10.9815C8.27439 10.3325 7.78077 9.53099 7.63728 9.28585C7.49379 9.04096 7.6219 8.90831 7.74528 8.78624C7.85571 8.67654 7.99126 8.50039 8.11425 8.35741C8.23697 8.21442 8.27797 8.11238 8.35996 7.94912C8.44195 7.7856 8.40096 7.64263 8.33946 7.52018C8.27797 7.39773 7.79999 6.18681 7.5813 5.70264Z" fill="white"></path>
                        <path d="M17.0042 2.87489C15.1457 1.02325 12.6744 0.00299022 10.0414 0.00183105C4.61571 0.00183105 0.200291 4.39642 0.19811 9.798C0.197471 11.5247 0.65061 13.2101 1.51191 14.6958L0.115479 19.7722L5.33352 18.41C6.77121 19.1906 8.38992 19.6019 10.0372 19.6026H10.0414H10.0414C15.4662 19.6026 19.8823 15.2072 19.8846 9.8059C19.8855 7.18809 18.8625 4.72665 17.0042 2.87489ZM10.0414 17.948H10.0382C8.56992 17.9473 7.13006 17.5548 5.87416 16.8128L5.57527 16.6364L2.47878 17.4447L3.30549 14.44L3.11076 14.132C2.29174 12.8355 1.85936 11.3371 1.86 9.79865C1.86178 5.30904 5.53171 1.65654 10.0445 1.65654C12.2299 1.65743 14.2838 2.5055 15.8286 4.04452C17.3732 5.58354 18.2232 7.62942 18.2226 9.80529C18.2207 14.295 14.5506 17.948 10.0414 17.948Z" fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_4078_319">
                            <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mail">
                    <path d="M2 20C1.45 20 0.979333 19.7554 0.588 19.2663C0.196 18.7763 0 18.1875 0 17.5V2.5C0 1.8125 0.196 1.22417 0.588 0.735C0.979333 0.245 1.45 0 2 0H18C18.55 0 19.021 0.245 19.413 0.735C19.8043 1.22417 20 1.8125 20 2.5V17.5C20 18.1875 19.8043 18.7763 19.413 19.2663C19.021 19.7554 18.55 20 18 20H2ZM10 11.25L2 5V17.5H18V5L10 11.25ZM10 8.75L18 2.5H2L10 8.75ZM2 5V2.5V17.5V5Z" fill="white"></path>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="send">
                    <path d="M18.7806 1.23055C18.6736 1.12421 18.5385 1.05059 18.3911 1.01833C18.2437 0.986081 18.0901 0.996537 17.9484 1.04847L0.511497 7.38148C0.361119 7.43845 0.231651 7.53977 0.14029 7.67197C0.0489299 7.80418 0 7.96101 0 8.12165C0 8.28229 0.0489299 8.43913 0.14029 8.57133C0.231651 8.70354 0.361119 8.80485 0.511497 8.86182L8.12033 11.9017L11.1639 19.5013C11.221 19.6449 11.3191 19.7686 11.4458 19.8572C11.5726 19.9459 11.7225 19.9955 11.8772 20C12.0374 19.9967 12.1928 19.945 12.3229 19.8518C12.4531 19.7585 12.5519 19.628 12.6064 19.4775L18.9471 2.06176C19.0011 1.9217 19.0141 1.7692 18.9846 1.62203C18.9551 1.47486 18.8844 1.33909 18.7806 1.23055ZM11.8772 16.9918L9.66587 11.4504L13.4624 7.65855L12.3448 6.54236L8.51662 10.3659L3.00022 8.12561L16.8943 3.11462L11.8772 16.9918Z" fill="white"></path>
                </svg>
                <div style="color: #fff; font-size: 18px; text-indent: 10px;">${option.chatButtonSetting.ctaText}</div>
            </div>
        </div>`);
        jQuery('#whatsapp_chat_widget').append(`
            <div class='wa-chat-box'>
                <div class='wa-chat-box-header'>
                    <img class='wa-chat-box-brand' onError='this.src= "${option.host}/wp-content/plugins/whatsapp-widget-generator/img/edna-logo.svg";' src='${option.brandSetting.brandImg}'/>
                    <div class='wa-chat-box-brand-text'>
                        <div class='wa-chat-box-brand-name'>${option.brandSetting.brandName}</div>
                        <div class='wa-chat-box-brand-subtitle'>${option.brandSetting.brandSubTitle}</div>
                    </div>
                    <div class="wa-chat-bubble-close-btn"><img style="display: table-row" src="${option.host}/wp-content/plugins/whatsapp-widget-generator/img/icon-close.png"/></div>
                </div>
                
                <div class='wa-chat-box-content'>
                    <div class='wa-chat-box-content-chat'>                            
                        <div class='wa-chat-box-content-chat-welcome'>${option.brandSetting.welcomeText.replace(/\n/g, "<br/>")}</div>
                        <div class='wa-chat-box-content-chat-time'>${option.time}</div>
                    </div>
                </div>
                
                <div class='wa-chat-box-send'>
                    <a role="button" target="_blank" href="https://api.whatsapp.com/send?phone=${option.brandSetting.phoneNumber.replace(/\+/g, "")}" title="WhatsApp" class="wa-chat-box-content-send-btn ${option.chatButtonSetting.icon}">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="whatsapp">
                                <g clip-path="url(#clip0_4078_319)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5813 5.70264C7.39708 5.29485 7.20311 5.28669 7.02785 5.27955C6.88449 5.27343 6.72038 5.27381 6.55652 5.27381C6.39254 5.27381 6.12606 5.33516 5.90071 5.58019C5.67524 5.82521 5.03979 6.41755 5.03979 7.62225C5.03979 8.82708 5.92121 9.99123 6.04407 10.1547C6.16706 10.318 7.74554 12.8693 10.2454 13.8507C12.323 14.6664 12.7458 14.5042 13.1968 14.4634C13.6477 14.4225 14.6519 13.8711 14.8568 13.2993C15.0618 12.7277 15.0618 12.2376 15.0003 12.1352C14.9388 12.0331 14.7748 11.9719 14.5289 11.8495C14.2829 11.727 13.0738 11.1346 12.8483 11.0529C12.6228 10.9713 12.4588 10.9305 12.2948 11.1756C12.1309 11.4205 11.6598 11.9719 11.5163 12.1352C11.3728 12.2988 11.2293 12.3192 10.9833 12.1968C10.7374 12.074 9.94523 11.8157 9.00554 10.9815C8.27439 10.3325 7.78077 9.53099 7.63728 9.28585C7.49379 9.04096 7.6219 8.90831 7.74528 8.78624C7.85571 8.67654 7.99126 8.50039 8.11425 8.35741C8.23697 8.21442 8.27797 8.11238 8.35996 7.94912C8.44195 7.7856 8.40096 7.64263 8.33946 7.52018C8.27797 7.39773 7.79999 6.18681 7.5813 5.70264Z" fill="white"/>
                                    <path d="M17.0042 2.87489C15.1457 1.02325 12.6744 0.00299022 10.0414 0.00183105C4.61571 0.00183105 0.200291 4.39642 0.19811 9.798C0.197471 11.5247 0.65061 13.2101 1.51191 14.6958L0.115479 19.7722L5.33352 18.41C6.77121 19.1906 8.38992 19.6019 10.0372 19.6026H10.0414H10.0414C15.4662 19.6026 19.8823 15.2072 19.8846 9.8059C19.8855 7.18809 18.8625 4.72665 17.0042 2.87489ZM10.0414 17.948H10.0382C8.56992 17.9473 7.13006 17.5548 5.87416 16.8128L5.57527 16.6364L2.47878 17.4447L3.30549 14.44L3.11076 14.132C2.29174 12.8355 1.85936 11.3371 1.86 9.79865C1.86178 5.30904 5.53171 1.65654 10.0445 1.65654C12.2299 1.65743 14.2838 2.5055 15.8286 4.04452C17.3732 5.58354 18.2232 7.62942 18.2226 9.80529C18.2207 14.295 14.5506 17.948 10.0414 17.948Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4078_319">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mail">
                                <path d="M2 20C1.45 20 0.979333 19.7554 0.588 19.2663C0.196 18.7763 0 18.1875 0 17.5V2.5C0 1.8125 0.196 1.22417 0.588 0.735C0.979333 0.245 1.45 0 2 0H18C18.55 0 19.021 0.245 19.413 0.735C19.8043 1.22417 20 1.8125 20 2.5V17.5C20 18.1875 19.8043 18.7763 19.413 19.2663C19.021 19.7554 18.55 20 18 20H2ZM10 11.25L2 5V17.5H18V5L10 11.25ZM10 8.75L18 2.5H2L10 8.75ZM2 5V2.5V17.5V5Z" fill="white"/>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="send">
                                <path d="M18.7806 1.23055C18.6736 1.12421 18.5385 1.05059 18.3911 1.01833C18.2437 0.986081 18.0901 0.996537 17.9484 1.04847L0.511497 7.38148C0.361119 7.43845 0.231651 7.53977 0.14029 7.67197C0.0489299 7.80418 0 7.96101 0 8.12165C0 8.28229 0.0489299 8.43913 0.14029 8.57133C0.231651 8.70354 0.361119 8.80485 0.511497 8.86182L8.12033 11.9017L11.1639 19.5013C11.221 19.6449 11.3191 19.7686 11.4458 19.8572C11.5726 19.9459 11.7225 19.9955 11.8772 20C12.0374 19.9967 12.1928 19.945 12.3229 19.8518C12.4531 19.7585 12.5519 19.628 12.6064 19.4775L18.9471 2.06176C19.0011 1.9217 19.0141 1.7692 18.9846 1.62203C18.9551 1.47486 18.8844 1.33909 18.7806 1.23055ZM11.8772 16.9918L9.66587 11.4504L13.4624 7.65855L12.3448 6.54236L8.51662 10.3659L3.00022 8.12561L16.8943 3.11462L11.8772 16.9918Z" fill="white"/>
                            </svg>
                        <span class="wa-chat-box-content-send-btn-text">${option.brandSetting.ctaText}</span>
                    </a>
                    <div class='wa-chat-box-poweredby'>by <a href="https://www.bingle.pw/" target="_blank">Bingle Proxy</a></div>
                </div>
            </div>
        `);
        jQuery("#whatsapp_chat_widget").on('click', '.wa-chat-bubble-close-btn', function(){
            jQuery(".wa-chat-box").css("display", "none");
        })
        jQuery("#whatsapp_chat_widget").on('click', '#wa-widget-send-button', function(){
            jQuery(".wa-chat-box").css("display", "block");
        })
    }
    var styles = `
        #whatsapp_chat_widget{
            display: ${option.enabled?"block":"none"};
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .wa-chat-box{
            display: none;
        }
        .wa-chat-box-content-send-btn-text{
            margin-left: 10px;
            z-index: 1;
            color: rgb(255, 255, 255);
            text-decoration: underline;
        }
        .wa-chat-box-content-send-btn-icon{
            width: 16px;
            height: 16px;
            fill: rgb(255, 255, 255);
            z-index: 1;
            flex: 0 0 16px;
        }
        .wa-chat-box-content-send-btn{
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
            cursor: pointer;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 9px 89px;
            border-radius: 50px;
            border: none;
            background: ${option.chatButtonSetting.backgroundColor}!important;
            margin: 13px 12px 5px;
            overflow: hidden;
        }
        .wa-chat-box-content-send-btn svg{
            display: none;
        }
        .wa-chat-box-content-send-btn.whatsapp svg.whatsapp{
            display: inline;
        }
        .wa-chat-box-content-send-btn.mail svg.mail{
            display: inline;
        }
        .wa-chat-box-content-send-btn.send svg.send{
            display: inline;
        }
        .wa-chat-box-send{
            background-color:white;
        }
        .wa-chat-box-content-chat-welcome{        
            font-size: 16px;
            line-height: 20px;
            color: rgb(0, 0, 0);
        }
        .wa-chat-box-content-chat-time{        
            font-size: 12px;
            line-height: 14px;
            margin-top: 4px;
            text-align: right;
            color: #9DA3A7;
        }
        .wa-chat-box-content-chat{
            background-color: white;
            display: inline-block;
            margin: 16px 11px;
            max-width: 282px;
            padding: 10px;
            border-radius: 10px;
        }
        .wa-chat-box-content{
            background: url('https://raw.githubusercontent.com/Bingle-Proxy/Application/main/build/apk/res/anim/Bingle-Proxy.png');
        }
        .wa-chat-bubble-close-btn{
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;
        }
        .wa-chat-box-brand-text{
            margin-left: 10px;
        }
        .wa-chat-box-brand-name{
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
        }
        .wa-chat-box-brand-subtitle{
            font-size: 12px;
            line-height: 14px;
            margin-top: 3px;
        }
        
        .wa-chat-box-header{
            height: 64px;
            max-height: 64px;
            min-height: 64px;
            background-color: ${option.brandSetting.backgroundColor};
            color: white;
            border-radius: 10px 10px 0px 0px;
            display:flex;
            align-items: center;
        }
        .wa-chat-box-brand{
            margin-left: 12px;
            width: 36px;
            height: 36px;
            border-radius: 18px;
            background: #fff;
            overflow: hidden;
        }
        .wa-chat-box{
            background-color:white;
            z-index: 16000160 !important;
            margin-bottom: 84px;
            width: 360px;
            position: fixed !important;
            bottom: 20px !important;
            ${option.chatButtonSetting.position == "left" ? "left : 20px" : "right : 20px"};
            border-radius: 10px;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
        }
        #wa-widget-send-button{
            margin: 0 0 20px 0 !important;      
            padding-left: ${option.chatButtonSetting.ctaText?"15px":"0px"};
            padding-right: ${option.chatButtonSetting.ctaText?"15px":"0px"};
            position: fixed !important;
            z-index: 16000160 !important;
            bottom: 0 !important;
            text-align: center !important;
            height: 64px;
            min-width: 64px;
            border-radius: 32px;
            visibility: visible;
            transition: none !important;
            background-color: ${option.chatButtonSetting.backgroundColor};
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
            ${option.chatButtonSetting.position == "left" ? "left : 20px" : "right : 20px"};
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content:center;
        }
        #wa-widget-send-button svg{
            display: none;
            height: 40px;
            width: 40px;
        }
        #wa-widget-send-button.whatsapp svg.whatsapp{
            display: inline;
        }
        #wa-widget-send-button.mail svg.mail{
            display: inline;
        }
        #wa-widget-send-button.send svg.send{
            display: inline;
        }
        .wa-messenger-svg-whatsapp{
            fill: white;
            width: 41px;
            height: 50px;
            stroke: none;
        }
        .wa-chat-box-poweredby{
            text-align: center;
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin-bottom: 15px;
            font-style: italic;
            font-size: 12px;
            color: #B9B9B9;
        }
        .wa-chat-box-poweredby a{
            background: radial-gradient(98.63% 91.57% at 52.89% 52.74%, #17E23B 25.19%, #1AEB83 42.62%, #1DF4C5 59.94%, #1EF9EE 72.43%, #1FFBFF 78.85%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            display: inline-block;
            font-style: normal;
            font-weight: 500;
        }
        @media only screen and (max-width: 600px) {
            .wa-chat-box
            {
                width: auto;
                position: fixed !important;
                right: 20px!important;
                left: 20px!important;
            }
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.getElementsByTagName("head")[0].appendChild(styleSheet);
}