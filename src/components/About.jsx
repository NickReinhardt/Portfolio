import "../styles/About.css"
import SecongImg from  "../assets/second-img.png"

const About = () => {

  return (

    <section className="about">
      <div className="about--description">
      <h2 className="about--title">About Me</h2>
        <img src={SecongImg} alt="" />
      </div>

        <div className="about--certificados">
        <p>
            Olá, sou uma entusiasta da tecnologia apaixonada por transformar ideias em realidade digital. Com experiência sólida em desenvolvimento web, meu foco principal é criar experiências online impactantes e funcionais.
            {/* Desde que mergulhei no mundo do desenvolvimento, tenho explorado diversas tecnologias, incluindo HTML, CSS, JavaScript, React e ferramentas como Bootstrap, Less e Sass. Essas habilidades me permitem não apenas criar sites visualmente atraentes, mas também funcionais e responsivos.
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Universidade São Francisco, onde tenho a oportunidade de aprimorar meu conhecimento teórico e prático. Além disso, realizei cursos na Alura e Udemy, que me proporcionaram uma base sólida em desenvolvimento web e me mantêm atualizada com as tendências do setor.
            Estou constantemente em busca de desafios que me permitam expandir meu conhecimento e aprimorar minhas habilidades. Se você procura uma profissional dedicada, apaixonada por tecnologia e comprometida com a excelência, estou pronta para fazer parte do seu projeto! */}
          </p>

          <label htmlFor="certificados"><strong>Certificates</strong></label>
          <ul id="certificados">
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quibusdam.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quibusdam.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quibusdam.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quibusdam.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quibusdam.</li>
          </ul>
        </div>
    </section>

  )

}

export default About