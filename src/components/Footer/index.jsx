import styles from './styles.module.scss';

export function Footer() {
   return (
      <footer className={styles.footer }>
         <p>Desafio 1 - front-end iniciante</p>
         <p>Iniciativa <a 
           href="https://github.com/mateusavila/dev-hall-front-end-1" 
           rel="nofollow noopener"
           aria-label="Link Dev Hall"
           >
           <span>DEV HALL</span>
           </a>
           </p>
      </footer>
   );
}