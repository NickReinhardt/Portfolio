// CSS Styles
import "./Header.css"

// Logo
import Logo from "../assets/dark-logo.svg"

// Toggle Light Button
import toggle from "../assets/toggle-off.svg"

// React Hooks
import { useState } from "react"

const Header = () => {

    // const [lightOn, setLightOn] = useState(true)

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
                    <button className="header--container__nav__button">
                        <img src={toggle} />
                    </button>
                </ul>
            </nav>
        </header>

    )

}

export default Header