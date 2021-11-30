import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import styles from './styles.module.scss';

export function Header() {
  const linkedin = "https://www.linkedin.com";
  const instagram = "https://instagram.com";
  const twitter = "https://twitter.com";
  return(
    <header className={styles.headerContainer}>
      <nav>
       <div className={styles.title}>
         <a href="#">
           <span>MeuFreela</span>
         </a>
       </div>
        <div className={styles.media}>
            <a href={linkedin} target="_blank" 
              aria-label="Link para o Linkedin">
              <FaLinkedinIn/>
            </a>
            <a href={instagram} target="_blank" 
              aria-label="Link para o Instagram"> 
              <FaInstagram/>              
            </a>
            <a href={twitter}  target="_blank" 
              aria-label="Link para o Twitter">
              <FaTwitter/>
            </a>
        </div>
      </nav>
    </header>
  );
}