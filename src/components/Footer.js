import "./Above.css"
import InstagramLogo from './images/InstagramLogo-c295ba7b.svg'
import LinkedinLogo from './images/LinkedinLogo-5e3617ce.svg'
function Footer(){
    return(
        <>
        <div className="lower-part">
     
     <div className="right-content">
         <ul>
             <li>Prompt Generator</li>
             <li>Dweep Daily</li>
             <li>All Contributors</li>
             <li>Your data on Dweep.io</li>
             <li>Contribute to Dweep</li>
         </ul>

     </div>
     <div className="left-content">
         <ul className="footer-list2">
             <li>Dweep.io</li>
             <li>Made with love in India</li>
             <li className="logo-list"><img src={LinkedinLogo} /><img
                     src={InstagramLogo} /></li>
             <li>&nbsp;</li>
             <li>hello@dweep.io</li>
         </ul>
     </div>



 </div>
        </>
    )
}

export default Footer;