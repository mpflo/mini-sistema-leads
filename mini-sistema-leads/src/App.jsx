import logo from './assets/logo.png'

function Hero() {
  return (
    //topo
    <section>
        <div className="container">
            <img src={logo} alt="Logo do Curso" />
            <h1>Seu inglês está te impedindo de avançar na carreira?</h1>
            <p>Transforme seu inglês básico em uma comunicação segura para reuniões, entrevistas e oportunidades profissionais no exterior — com um plano de estudos pensado para você evoluir em até 1 ano.</p>
            <div>
                <a href="#">Quero saber mais</a>
                <a href="#">Falar com um especialista</a>
            </div>
        </div>
    </section>
  )
}



function App() {
  return (
    <>
      <Hero />
    </>
  )
}

export default App
