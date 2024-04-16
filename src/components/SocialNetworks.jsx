import { FaGithub, FaLinkedin } from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", url: "https://www.linkedin.com/in/vinicius-amaral-7380112b9/",icon: <FaLinkedin />},
  { name: "github", url: "https://github.com/amaralvinicius", icon: <FaGithub />}
]

const SocialNetworks = () => {

  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name} target="_blank">
          {network.icon}
        </a>
      ))}
    </section>
  )

}

export default SocialNetworks
