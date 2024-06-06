/* Import Image */
import MainImage from "../assets/main-img.png"

import "../styles/MainContent.css"

const MainContent = () => {

  return (

    <section className="container">
        <div className="container__text">
            <h1 className="container--title">Hi! My name is Lana</h1>
            <p className="container--description">I'm a web front-end developer from Brazil.</p>
            <button className="call-to-action">Contact Me</button>
        </div>

        <div className="container__image">
            <img src={MainImage} alt="codes on computer" />
        </div>
    </section>

  )

}

export default MainContent