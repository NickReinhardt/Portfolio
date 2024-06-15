// Contact Icons
import Linkedin from "../assets/linkedin-icon.svg"
import Email from "../assets/email-icon.svg"
import Github from "../assets/github-icon.svg"

// CSS Styles
import "../styles/Footer.css"

const Footer = () => {

  return (

    <footer className="footer">

        <div className="footer__hero">
            <h2 className="footer__title">Contact</h2>
            <p className="footer__paragraph">Feel free to reach out!</p>
        </div>

        <div className="footer__contact">
            <ul className="footer__contact__list">
                <li className="footer__contact__list__item">
                    <a className="list__item__link" target="_blank" href="">
                        <img src={Email} />
                        <span>Email Me</span>
                    </a>
                </li>

                <li className="footer__contact__list__item">
                    <a className="list__item__link" target="_blank" href="https://www.linkedin.com/in/nicollascrg">
                        <img src={Linkedin} />
                        <span>linkedin.com/lana</span>
                    </a>
                </li>

                <li className="footer__contact__list__item">
                    <a className="list__item__link" target="_blank" href="https://github.com/NickReinhardt">
                        <img src={Github} />
                        <span>github.com/NickReinhardt</span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>

  )

}

export default Footer