import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  isLoading = false,
  disabled,
  ...props
}) => {

  const baseStyle = `
    relative inline-flex items-center justify-center 
    px-[28px] py-[15px] 
    rounded-[14px] 
    font-['Poppins'] font-semibold text-base
    transition-all duration-[180ms] ease-out
    hover:-translate-y-[3px]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6b4eff]
    disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-[#6b4eff] to-[#8b6bff] 
      text-white border-transparent
      shadow-[0_10px_26px_rgba(107,78,255,0.18)]
      hover:shadow-[0_14px_30px_rgba(107,78,255,0.25)]
    `,

    outline: `
      bg-transparent 
      border-2 border-[#4a36b2] 
      text-[#4a36b2]
      hover:bg-[#4a36b2]/5
    `,


    tertiary: `
      bg-transparent 
      border border-[rgba(15,23,42,0.04)] 
      text-gray-700
      hover:bg-gray-50
    `
  };

  return (
    <button
      className={`
        ${baseStyle} 
        ${variants[variant] || variants.primary} 
        ${className}
      `}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Carregando...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;