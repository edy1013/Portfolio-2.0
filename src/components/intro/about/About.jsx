import "./about.css";
import Me2 from "../../../img/me2.jpg"
const about = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">
                    
                </div>
                <div className="a-card">
                <img src={Me2} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                 <h1 className="a-title">About Me</h1>
                     <p className="a-sub">
                        Ada is my Love.
                     </p>
                    <p className="a-desc">
                    I’m a self thoutgh FrontEnd web developer. I specialize in front end development, user experience, and creating identities and branding. Looking to work and learn , so contact me if you’d like to work together on your next project.
                     </p>
                    
                </div>
            </div>
    )
}

export default about
