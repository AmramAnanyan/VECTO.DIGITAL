import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

export interface IButtonUI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  className?: string;
  onClick: () => void;
}

const ButtonUi: FC<IButtonUI> = ({
  children,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`rounded-3xl py-2 px-5 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonUi;
