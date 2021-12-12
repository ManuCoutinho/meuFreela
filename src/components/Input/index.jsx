import InputMask from 'react-input-mask';

export function Input({ type, placeholder, name, id, onChange, ariaLabel, value, mask}) {
   return(
      <>         
          <InputMask
              type={type}
              value={value} 
              placeholder={placeholder}
              id={id}              
              name={name}
              onChange={onChange}
              aria-label={ariaLabel}
              mask={mask}            
          />
      </>
   );
}