import imgSecondary from "../../assets/imgSecondary.png";
import imgSecondary2 from "../../assets/imgSecondary.webp";
import styles from "./styles.module.scss";

export function MiddleSection() {
  return (
    <section className={styles.containerSection}>
      <div className={styles.containerGrid}>
        <div className={styles.contentMiddle}>
          <h2>Nossa iniciativa</h2>
          <p>
            Somos desenvolvedores que se dedicam a fazer projetos perfeitos e
            entregar valor para todos os seus clientes. Gostamos de ver clientes
            satisfeitos com projetos feitos com carinho, atenção e qualidade
            altíssima.
          </p>
        </div>        
          <picture className={styles.imgMiddle}>
            <img
              src={imgSecondary2}
              type="image/webp"
              loading="lazy"
              alt="imagem de um homem jovem negro pensando"
              width="408" height="466"
            />
            <source srcSet={imgSecondary}
            type="image/png" 
            />
          </picture>
      </div>      
    </section>
  );
}
