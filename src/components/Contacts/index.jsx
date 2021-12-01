import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './styles.module.scss';


export function Contacts() {
   const[valueName, setValueName] = useState("");
   const[valueTel, setValueTel] = useState("");    
   const id = Math.floor(Math.random()*100); 

   useEffect(()=> {

   }, [])
   
   async function createdDataForm(){
      const data = {
         id: id,
         fullName: valueName,
         phone: valueTel,
         createdAt: new Date(),
      }         
      const response = await api.post('/form', data) 
      //const {} = response.data;   
   }

  function handleOnInput(e) { 
     e.preventDefault();
      if (valueName !== "" && valueTel !== "" && valueTel.length >= 11) { 
         createdDataForm()        
         toast.success("Aguarde nosso contato!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",            
         });
         setValueName('')
         setValueTel('')
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
      <section className={styles.container} id="contacts-section"> 
         <div>
            <h2>Mande um oi, ligamos para você!</h2>
            <p>Preencha seus dados para que a gente possa entrar em contato.</p>
         </div>
         <div className={styles.formContent}>
            <form onSubmit={ handleOnInput } >
            <label htmlFor="nome">Nome Completo 
               <Input
                  type= "text" 
                  placeholder="Ex: Maria Carolina de Jesus"
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
               <Button
                  type="submit"
                  aria-label="peça uma reunião"                                             
                  text={"Peça uma reunião"}          
               >
               </Button>     
            </form>
         </div>
      </section>
   );
}