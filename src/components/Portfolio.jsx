import projectImg from "../assets/project1.png"
//import '../styles/Portfolio.css'

const Portfolio = ({preview, title, description, usedLang, githubButton}) => {

  return (

    <section className="project">

        <div className="project__preview">
            <img src={projectImg} alt="project" />
        </div>

        <div className="project__description">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="project__used--langs">
              {usedLang.map((item) => 
                <li key={item}>
                  {item}
                </li>)}
          </ul>
          <button className="project__gh--link">{githubButton}</button>
        </div>

    </section>

  )

}

export default Portfolio