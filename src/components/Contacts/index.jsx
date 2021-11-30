import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';


export function Contacts() {
   const[valueName, setValueName] = useState("");
   const[valueTel, setValueTel] = useState("");

   
   function handleOnInput() {      
      if (valueName !== "" && valueTel !== "" && valueTel.length >= 11) {         
         console.log({valueTel, valueName})
      } else {
         toast.error ("Preencha todos os campos", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",            
         });
      }
   }
  
   return (
      <section className={styles.container} id="contacts"> 
         <div>
            <h2>Mande um oi, ligamos para você!</h2>
            <p>Preencha seus dados para que a gente possa entrar em contato.</p>
         </div>
         <div className={styles.formContent}>
            <form>
            <label htmlFor="nome">Nome Completo 
               <Input
                  type= "text" 
                  placeholder="Ex: Mateus Ávila Isidoro"
                  value={valueName}
                  onChange={(e) => setValueName(e.target.value)}               
                  name= "nome"              
                  aria-label="Nome"  
               />
            </label>
            <label htmlFor="tel">Whatsapp 
               <Input
                  type="tel"
                  placeholder= "(99) 99999-9999"
                  maxLength= "11"
                  onChange={(e) => setValueTel(e.target.value) }  
                  value={valueTel}
                  name= "telefone"                  
                  aria-label="Telefone" 
               />
            </label>
            </form>
            <Button
               type="button"
               aria-label="peça uma reunião"               
               onClick={ handleOnInput }                             
               text={"Peça uma reunião"}          
            >
            </Button>     
         </div>
      </section>
   );
}