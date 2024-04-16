import Avatar from '../assets/Avatar.jpg'

import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vinícius Amaral" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks  />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1ZGZiGilXWkUK1dOVziAumVllee-2xJNI/view?usp=sharing" className="btn" target="_blank">Download currículo</a>
    </aside>
  )

}

export default Sidebar
