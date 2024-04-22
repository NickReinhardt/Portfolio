/* Import Image */
import MainImage from "../assets/main-img.png"

import "./MainContent.css"

const MainContent = () => {

  return (

    <section className="container">
        <div className="container__description">
            <h1>Hi! My name is Lana</h1>
            <p>I'm a web front-end developer from Brazil.</p>
        </div>

        <div className="container__image">
            <img src={MainImage} alt="codes on computer" />
        </div>
    </section>

  )

}

export default MainContent