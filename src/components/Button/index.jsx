

export function Button({ type, link, text, ariaLabel, onClick }) {
  return(
    <button          
          type={type} 
          aria-label={ariaLabel}         
          href={link}
          onClick={onClick}          
        >
          {text}
        </button>  
  );
}