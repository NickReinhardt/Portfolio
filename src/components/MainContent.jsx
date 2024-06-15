// Import Image
import MainImage from "../assets/main-img.png"

// CSS Styles 
import "../styles/MainContent.css"

const MainContent = () => {

  return (

    <section className="main-container">

        <div className="text__container">
            <h1 className="text__title">Hi, I'm Lana</h1>
            <p className="text__description">I'm a web front-end developer from Brazil.</p>
            <button className="call-to-action">Contact Me</button>
        </div>

        <div>
            <img className="main__img" src={MainImage} alt="codes on computer" />
        </div>

    </section>

  )

}

export default MainContent