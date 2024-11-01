import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: Props) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
