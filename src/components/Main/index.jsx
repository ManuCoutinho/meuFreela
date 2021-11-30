import { Button } from '../Button';
import { Contacts } from '../Contacts';
import styles from './styles.module.scss';



export function Main() {

  return (
    <main className={styles.mainContainer}>      
      <section className={styles.mainSection}>
        <p>Desenvolvedores prontos para ação</p>
        <h1>
        Seu projeto pronto <br/>na velocidade da luz
        </h1>
        <Button
          type="button"
          aria-label="peça uma reunião"
          href={Contacts}
          text="Peça uma reunião"
        >
          Peça uma reunião          
        </Button>         
      </section>
    </main>
  );
}

