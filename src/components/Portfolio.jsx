const Portfolio = () => {

  return (

    <section>
        <div className="project">

          <div className="project__preview">
              imagem
          </div>

          <div className="project__description">
            <h2>titulo do projeto</h2>
            <p>paragrafo sobre o projeto</p>
            <ul className="project__used__langs">
              <li>html</li>
              <li>css</li>
              <li>js</li>
              <li>react</li>
            </ul>
            <button className="project__gh__link">GitHub</button>
          </div>

        </div>
    </section>

  )

}

export default Portfolio