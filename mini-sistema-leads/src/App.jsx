import logo from './assets/logo.png';
import ConversaMariana from './assets/conversa-mariana.png';
import ConversaLucas from './assets/conversa-lucas.png';
import ConversaSamantha from './assets/conversa-samantha.png';
import MercadoIcon from './icons/MercadoIcon';
import FaleIcon from './icons/FaleIcon';
import EstudeIcon from './icons/EstudeIcon';
import EntrevistaIcon from './icons/EntrevistaIcon';
import InglesIcon from './icons/InglesIcon';
import EvoluirIcon from './icons/EvoluirIcon';
import { useState, useEffect } from 'react'

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

function Beneficios() {
  return (
    <section className="bg-[#dae2f3] py-10 md:py-20">
        <div className="container">
            <h2 className="text-[#19346e] text-center mb-5 md:mb-10">Inglês para você ir mais longe</h2>

            <ul className="grid grid-cols-1 md:grid-cols-3 text-[#0f1e3e] gap-5">
                <li className="border-2 border-[#19346e] rounded-md p-4 space-y-4 bg-white">
                    <MercadoIcon className="size-10" />
                    <h3 className="text-[20px] font-semibold">Inglês para o mercado de trabalho</h3>
                    <p>Aprenda vocabulário e expressões usados em reuniões, entrevistas, apresentações e situações profissionais.</p>
                </li>
                <li className="border-2 border-[#19346e] rounded-md p-4 space-y-4 bg-white">
                    <FaleIcon className="size-10" />
                    <h3 className="text-[20px] font-semibold">Fale com mais confiança</h3>
                    <p>Pratique conversação desde o início e perca o medo de falar inglês com outras pessoas.</p>
                </li>
                <li className="border-2 border-[#19346e] rounded-md p-4 space-y-4 bg-white">
                    <EstudeIcon className="size-10" />
                    <h3 className="text-[20px] font-semibold">Estude no seu ritmo</h3>
                    <p>Tenha acesso a uma rotina de estudos que pode se adaptar à sua disponibilidade.</p>
                </li>
                <li className="border-2 border-[#19346e] rounded-md p-4 space-y-4 bg-white">
                    <EntrevistaIcon className="size-10" />
                    <h3 className="text-[20px] font-semibold">Prepare-se para entrevistas</h3>
                    <p>Aprenda a apresentar sua experiência profissional e responder perguntas comuns em processos seletivos internacionais.</p>
                </li>
                <li className="border-2 border-[#19346e] rounded-md p-4 space-y-4 bg-white">
                    <InglesIcon className="size-10" />
                    <h3 className="text-[20px] font-semibold">Aprenda inglês técnico</h3>
                    <p>Amplie seu vocabulário profissional e compreenda termos importantes da sua área de atuação.</p>
                </li>
                <li className="border-2 border-[#19346e] rounded-md p-4 space-y-4 bg-white">
                    <EvoluirIcon className="size-10" />
                    <h3 className="text-[20px] font-semibold">Evolua em até 1 ano</h3>
                    <p>Siga uma trilha estruturada para desenvolver compreensão, escrita, leitura e conversação ao longo do curso.</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

function Depoimentos() {
  const [slideAtual, setSlideAtual] = useState(0)

  function proximoSlide() {
    setSlideAtual((valorAnterior) => (valorAnterior + 1) % slides.length)
  }

  function anteriorSlide() {
    setSlideAtual((valorAnterior) => (valorAnterior - 1 + slides.length) % slides.length)
  }

  const slides = [
    ConversaMariana,
    ConversaLucas,
    ConversaSamantha
  ]

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximoSlide()
    }, 10000)

    return () => {
      clearInterval(intervalo)
    }
  }, [])

  return (
    <section className="pt-15 pb-25 md:py-20">
          <div className="container">
              <h2 className="text-center mb-5 md:mb-10">Depoimentos dos nossos Alunos</h2>

              <div id="carrossel" className="border-2 border-[#ff3131] relative rounded-xl md:w-1/2 mx-auto">
                  <div className="carrossel-container">
                      <div className="slide">
                          <img className="w-full rounded-xl" src={slides[slideAtual]} alt="Depoimento" />
                      </div>
                  </div>
                  
                  <button onClick={anteriorSlide} className="bg-[#ff3131] hover:bg-[#19346e] absolute -bottom-18 left-3 md:top-1/2 md:-left-5 size-10 text-[18px] rounded-full text-white cursor-pointer">&lt;</button>
                  <button onClick={proximoSlide} className="bg-[#ff3131] hover:bg-[#19346e] absolute -bottom-18 right-3 md:top-1/2 md:-right-5 size-10 text-[18px] rounded-full text-white cursor-pointer">&gt;</button>
              </div>
          </div>
      </section>
  )
}

function App() {
  return (
    <>
      <Hero />
      <Beneficios />
      <Depoimentos />
    </>
  )
}

export default App
