import "./Header.css"
import Logo from "../assets/dark-logo.svg"
import toggle from "../assets/toggle-off.svg"

const Header = () => {

  return (

    <header className="header--container">
        <div>
            <img src={Logo} alt="logo" />
        </div>

        <nav className="header--container__nav">
            <ul className="header--container__nav__list">
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Github</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
            <button className="header--container__nav__button">
                <img src={toggle}/>
            </button>
        </nav>
    </header>

  )

}

export default Header