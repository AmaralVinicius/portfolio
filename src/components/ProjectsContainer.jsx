import Costs0 from '../assets/projects/Costs0.png'
import Costs1 from '../assets/projects/Costs1.png'

const ProjectsContainer = () => {

  return (
    <section id="projects-container">
      <h2>Projetos</h2>
      <div className="project">
        <h3>Costs</h3>
        <p>Projeto de um gerenciador de custos e projetos, feito com base no <a href="https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO" target="_blank">curso de React do Matheus Battisti</a> como atividade para a liga acadêmica de desenvolvedores do curso de Sistemas de Informação do IFBA.</p>
        <div className="previews">
          <img src={Costs0} alt="Costs" className="preview"/>
          <img src={Costs1} alt="Costs" className="preview"/>
        </div>
        <a href="https://github.com/AmaralVinicius/Costs" target="_blank" className="btn">Ver Projeto</a>
      </div>
    </section>
  )

}

export default ProjectsContainer
