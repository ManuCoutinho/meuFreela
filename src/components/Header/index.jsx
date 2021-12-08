import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import styles from "./styles.module.scss";

export function Header() {
  const linkedin = "https://www.linkedin.com";
  const instagram = "https://instagram.com";
  const twitter = "https://twitter.com";
  return (
    <header className={styles.headerContainer}>
      <nav>
        <p className={styles.title}>
          <span>MeuFreela</span>
        </p>
        <div className={styles.media}>
          <a
            href={linkedin}
            target="_blank"
            aria-label="Link para o Linkedin"
            rel="noopener noreferrer external nofollow"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={instagram}
            target="_blank"
            aria-label="Link para o Instagram"
            rel="noopener noreferrer external nofollow"
          >
            <FaInstagram />
          </a>
          <a
            href={twitter}
            target="_blank"
            aria-label="Link para o Twitter"
            rel="noopener noreferrer external nofollow"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </header>
  );
}
