// Image and Icons
import SecondImg from  "../assets/about-img.png"
import Arrow from  "../assets/about-arrow.png"
import Stacks from  "../assets/about-stacks.png"
import Computer from  "../assets/about-computer.png"

// CSS Styles
import "../styles/About.css"

const About = () => {

  return (

    <section className="about">    

      {/* Left side of the about section */}
      <div>
          <h2 className="about__title">About Me</h2>
          <img src={SecondImg} />
      </div>





      {/* Right side of the about section */}
      <div className="about__description">

        {/* -------- item 1 -------- */}
        <div className="about__description__item">
          {/* item image */}
          <div>
            <img src={Arrow} className="about__items__img"/>
          </div>

          {/* item description */}
          <div className="about__items__description">
            <h2 className="items__title">Analysis and Systems Development</h2>
            <p className="items__paragraph">im a frontend developer with experience in building responsive and optimized sites</p>
          </div>
        </div>

        {/* -------- item 2 -------- */}
        <div className="about__description__item">
          {/* item image */}
          <div>
            <img src={Stacks} className="about__items__img"/>
          </div>

          {/* item description */}
          <div className="about__items__description">
            <h2 className="items__title">Analysis and Systems Development</h2>
            <p className="items__paragraph">im a frontend developer with experience in building responsive and optimized sites</p>
          </div>
        </div>


        {/* -------- item 3 -------- */}
        <div className="about__description__item">
          {/* item image */}
          <div>
            <img src={Computer} className="about__items__img"/>
          </div>

          {/* item description */}
          <div className="about__items__description">
            <h2 className="items__title">Analysis and Systems Development</h2>
            <p className="items__paragraph">im a frontend developer with experience in building responsive and optimized sites</p>
          </div>
        </div>
        
      </div>
    </section>

  )

}

export default About