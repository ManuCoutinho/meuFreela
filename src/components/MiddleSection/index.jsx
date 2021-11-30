import imgSecondary from '../../assets/imgSecondary.svg';
import styles from './styles.module.scss';

export function MiddleSection() {
  return(   
     <section className={styles.containerSection}>
      <div className={styles.containerGrid}>
         <div className={styles.contentMiddle}>
            <h2>Nossa iniciativa</h2>
            <p>Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar 
               valor para todos os seus clientes. Gostamos de ver clientes satisfeitos 
               com projetos feitos com carinho, atenção e qualidade altíssima.
            </p>
         </div>
         <div className={styles.imgMiddle}>
            <img src={imgSecondary} 
            alt="imagem de um homem jovem negro pensando"
            loading="lazy-load"
            />
         </div>
      </div>
         <div className={styles.clipMiddle}>        
         </div>
    </section>     
  );
}