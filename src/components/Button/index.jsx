

export function Button({ type, text, ariaLabel, onClick }) {
  return(
    <button          
          type={type} 
          aria-label={ariaLabel}          
          onClick={onClick}          
        >
          {text}
        </button>  
  );
}