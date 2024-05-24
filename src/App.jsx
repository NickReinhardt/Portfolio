import './App.css'

import Header from './components/Header'
import MainContent from './components/MainContent'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {

  

  return (
    <>
      <Header />
      <MainContent />

      <About />
      
      {/*
      <Portfolio 
                 title="uber"
                 description="site pra chamar carro pra te dirigir pros lugares"
                 usedLang={ ["html, js, css, python, java, C#"] }
                 githubButton="https://youtube.com.br"
      />
     */}
    </>
  )
}

export default App