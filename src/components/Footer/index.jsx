import styles from './styles.module.scss';

export function Footer() {
   return (
      <footer className={styles.footer }>
         <p>Desafio 1 - front-end iniciante</p>
         <p>Iniciativa <span>DEV HALL</span></p>
      </footer>
   );
}