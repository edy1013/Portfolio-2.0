import "../contact/contact.css"
import Phone from "..//..//img/phone.png"
import Email from "..//..//img/email.png"
import Address from "..//..//img/address.png"
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_otuusfb', 'template_xdahp0s', formRef.current, 'user_dF9yI2CKjUMh6KgjiUUCK')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-">
                            <img src={Phone} alt="" className="c-icon" />
                            +389 70 661194
                        </div>
                        <div className="c-info-item">
                        <img className="c-icon" src={Email} alt="" />
                        edisan.ibisi@gmail.com
                         </div>
                        <div className="c-info-item">
                        <img className="c-icon" src={Address} alt="" />
                         1000 Skopje
                        </div>
                    </div>
                </div>
                <div className="c-right">
                     <div className="c-right">
                         <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                         freelancing if the right project comes along. me.
                         </p>
                         <form ref={formRef} onSubmit={handleSubmit}>
                             <input type="text" placeholder="Name" name="user_name"  />
                             <input type="text" placeholder="Subject" name="user_subject"  />
                             <input type="text" placeholder="Email" name="user_email"  />
                             <textarea rowns="5" placeholder="Message" name="message" />
                             <button>Submit</button>
                             {done && "Thank You. I will get back to You as soon as possible"}
                         </form>
                    </div>
                </div>
            </div>
        </div>    
    );
};


export default Contact
