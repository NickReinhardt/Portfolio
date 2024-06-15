// Github Icon
import Share from "../assets/external-link-icon.svg"

// CSS Styles
import "../styles/Header.css"

const Header = () => {

    return (

        <header className="header">
            <div className="header__title">
                Portfolio
            </div>
            
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li><a className="nav__list__item" href="#">About</a></li>
                    <li><a className="nav__list__item" href="#">Projects</a></li>
                    <li><a className="nav__list__item" href="#">Contact</a></li>
                    <li>
                        <a className="nav__list__item" target="_blank" href="https://github.com/NickReinhardt">
                            Github
                            <img className="header__nav__share" src={Share}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    )

}

export default Header