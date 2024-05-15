import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="text-xs flex flex-col mt-5 items-center justify-center">
    <div className='text-base space-x-5'>
    <FontAwesomeIcon className="cursor-pointer" onClick={()=> window.open("https://www.instagram.com/af.baguette/", "_blank")} icon={faInstagram}/>
    <FontAwesomeIcon className="cursor-pointer" onClick={()=> window.open("https://github.com/purplehazee1337", "_blank")} icon={faGithub} />
    <FontAwesomeIcon className="cursor-pointer" onClick={()=> window.open("https://twitter.com/purplehazee1337", "_blank")} icon={faTwitter} />
    </div>
       <a>© Website made by Wojciech Jechowski</a>
       <a href='https://sketchfab.com/3d-models/mercedes-benz-300-sl-gullwing-505241c829c540a4921533000736904e' target="_blank">© Car design Lexyc16</a>
      </div>
  );
};

export default Footer;