import { ReactNode } from 'react';

interface Iprops {
  children: ReactNode;
  tail?: string;
  func?: () => void;
}

export default function Icon({ children, tail, func }: Iprops) {
  return (
    <span
      className={`${tail} bg-ligth-primary-100 rounded-3xl hover:text-white hover:bg-ligth-primary-200 duration-300 hover:cursor-pointer
        dark:text-black hover:dark:text-white
       `}
      onClick={func}
    >
      {children}
    </span>
  );
}
