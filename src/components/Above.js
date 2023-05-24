import { useState } from "react"
import "./Above.css"
import ProfilePic from "./images/person.svg"
function Above(){
    let valid_flag=false
    
    const [current_f,set_flag]=useState(false)
    const [my_mail, setMail_Val] = useState("")
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    function registration(){
        
        if(regex.test(my_mail)){
            set_flag(true)
        }
        else{
            alert("Enter Valid Email")
            set_flag(false)
        }
        
       
        console.log(my_mail)
    }

    function onChange_value(val){
        setMail_Val(val.target.value)
        console.log(val.target.value)
    }

    return(
        <>
        <div className="upper-part">
            <div className="left-part">
                <p className="header">An inspiring design delivered to your inbox every morning</p><br/>
                    <p className="description">Our team scouts the internet for the best designs, illustrations and art and
                        delivers a truly inspiring one every day to your inbox</p><br/>
                        {current_f?<><p className="tag-tag">Thank You!</p><br/></>:<><p className="tag">Show me how it looks</p><br/>
                    <input type="email" placeholder="Your e-mail address" onChange={onChange_value} />
                    <button onClick={registration}>Register Now</button></>}

                    <div className="bottom-line">Free - No Spam - No Data Sharing</div>
            </div>
          <div className="right-part">
            <img src={ProfilePic}/>
          </div>
        </div>
        </>
    )
}

export default Above;