import Linkedin from '../assets/linkedin.png'
import Email from '../assets/email.png'
import Github from '../assets/github.png'

import '../styles/Footer.css'

const Footer = () => {

  return (

    <footer className='footer'>
        <div className='footer--left'>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <div className='footer--right'>
            <ul>
                <li>
                    <a  target="_blank" href="">
                        <img src={Email} />
                        <span>Email Me</span>
                    </a>
                </li>

                <li>
                    <a  target="_blank" href="https://www.linkedin.com/in/nicollascrg">
                        <img src={Linkedin} />
                        <span>linkedin.com/lana</span>
                    </a>
                </li>

                <li>
                    <a  target="_blank" href="https://github.com/NickReinhardt">
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