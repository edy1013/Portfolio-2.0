import "../contact/contact.css"
import Phone from "..//..//img/phone.png"
import Email from "..//..//img/email.png"
import Address from "..//..//img/address.png"


const Contact = () => {
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
                <div className="c-right"></div>
            </div>
        </div>
    )
}

export default Contact
