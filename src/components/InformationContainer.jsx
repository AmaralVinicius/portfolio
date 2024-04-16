import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {

  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>+55 (75) 9 91163445</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>amaralvinicius171@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Feira de Santana / BA</p>
        </div>
      </div>
    </section>
  )

}

export default InformationContainer
