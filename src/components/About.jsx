import "../styles/About.css"
import SecondImg from  "../assets/second-img.png"

const About = () => {

  return (

    <section className="about">     
      <div className="about--description">
        <h2 className="about--title">About Me</h2>
        <img src={SecondImg} alt="" />
      </div>

        <div className="about--certificados">
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Frontend Developer</h2>
              <p>im a frontend developer with experience in building responsive and optimized sites</p>
            </div>
          </div>

          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Backend Developer</h2>
              <p>i have experience developing fast and optimised back-end systems and APIs</p>
            </div>
          </div>

          <div>
            <div>
              <img src="" alt="" />
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