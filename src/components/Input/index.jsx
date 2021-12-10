import InputMask from 'react-input-mask';

export function Input({ type, placeholder, maxLength, name , onChange, ariaLabel, value, mask}) {
   return(
      <>         
          <InputMask
              type={type}
              value={value} 
              placeholder={placeholder}
              maxLength={maxLength}
              name={name}
              onChange={onChange}
              aria-label={ariaLabel}
              mask={mask}            
          />
      </>
   );
}