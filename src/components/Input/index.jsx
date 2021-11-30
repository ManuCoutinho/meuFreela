export function Input({ type, placeholder, maxLength, name , onChange, ariaLabel, value}) {
   return(
      <>         
          <input 
              type={type}
              value={value} 
              placeholder={placeholder}
              maxLength={maxLength}
              name={name}
              onChange={onChange}
              aria-label={ariaLabel}             
          />
      </>
   );
}