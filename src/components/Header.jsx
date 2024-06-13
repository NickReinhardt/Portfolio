// CSS Styles
import "../styles/Header.css"

// Logo
import Logo from "../assets/dark-logo.png"

const Header = () => {

    return (

        <header className="header">
            <div>
                <img src={Logo} alt="logo" />
            </div>
            
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li><a className="nav__list--item" href="#">About</a></li>
                    <li><a className="nav__list--item" href="#">Projects</a></li>
                    <li><a className="nav__list--item" href="#">Contact</a></li>
                    <li><a className="nav__list--item" href="#">Github</a></li>
                </ul>
            </nav>
        </header>

    )

}

export default Header