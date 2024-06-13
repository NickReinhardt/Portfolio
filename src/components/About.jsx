import "../styles/About.css"
import SecondImg from  "../assets/second-img.png"
import Seta from  "../assets/seta.png"
import Stacks from  "../assets/stacks.png"
import Computer from  "../assets/computer.png"

const About = () => {

  return (

    <section className="about">     
      <div className="about--description">
        <h2 className="about--title">About Me</h2>
        <img src={SecondImg} alt="" />
      </div>

        <div>
          <div className="about--certificados">
            <div>
              <img src={Seta} className="about--certificados--img" />
            </div>
            <div>
              <h2>Frontend Developer</h2>
              <p>im a frontend developer with experience in building responsive and optimized sites</p>
            </div>
          </div>

          <div className="about--certificados"> 
            <div>
              <img src={Computer} className="about--certificados--img" />
            </div>
            <div>
              <h2>Backend Developer</h2>
              <p>i have experience developing fast and optimised back-end systems and APIs</p>
            </div>
          </div>

          <div className="about--certificados">
            <div>
              <img src={Stacks} className="about--certificados--img" />
            </div>
            <div>
              <h2>UI/UX Developer</h2>
              <p>i have designed multiple landing pages and have created design systems as well</p>
            </div>
          </div>
        </div>
    </section>

  )

}

export default About