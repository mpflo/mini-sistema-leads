import logo from './assets/logo.png'

function Hero() {
  return (
    //topo
    <section className="bg-[url(/src/assets/topo-3.png)] bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="container text-center text-white">
            <img className="w-50 md:w-100 mx-auto" src={logo} alt="Logo do Curso" />
            <div className="md:w-2/3 mx-auto space-y-3 mt-5">
              <h1 className="text-[32px] md:text-[46px] font-extrabold">Seu inglês está te impedindo de avançar na carreira?</h1>
              <p className="md:text-[18px]">Transforme seu inglês básico em uma comunicação segura para reuniões, entrevistas e oportunidades profissionais no exterior — com um plano de estudos pensado para você evoluir em até 1 ano.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2.5 mt-5 justify-center">
                <a className="btn bg-[#19346e] hover:bg-[#112142]" href="#">Quero saber mais</a>
                <a className="btn bg-[#ff3131] hover:bg-[#bf2727]" href="#">Falar com um especialista</a>
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
