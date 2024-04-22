// CSS Styles
import "./Header.css"

// Logo
import Logo from "../assets/dark-logo.svg"

const Header = () => {

    // const [lightOn, setLightOn] = useState(true)

    return (

        <header className="header--container">
            <div>
                <img src={Logo} alt="logo" />
            </div>

            <nav className="header--container__nav">
                <ul className="header--container__nav__list">
                    <li><a className="nav__list--item" href="#">Portfolio</a></li>
                    <li><a className="nav__list--item" href="#">Github</a></li>
                    <li><a className="nav__list--item" href="#">About</a></li>
                    <li><a className="nav__list--item" href="#">Contact Me</a></li>
                </ul>
            </nav>
        </header>

    )

}

export default Header