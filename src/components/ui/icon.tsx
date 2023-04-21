import { ReactNode } from 'react';

interface Iprops {
  children: ReactNode;
  variantes?: string;
  func?: () => void;
}

export default function Icon({ children, variantes, func }: Iprops) {
  return (
    <span
      className={`${variantes} bg-ligth-primary-100 rounded-3xl hover:text-white hover:bg-ligth-primary-200 duration-300 hover:cursor-pointer
        dark:text-black hover:dark:text-white
       `}
      onClick={func}
    >
      {children}
    </span>
  );
}
