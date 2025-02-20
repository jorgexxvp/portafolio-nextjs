import Image from 'next/image';
import { FC } from 'react';

interface IconButtonProps {
  icon: string;
  onClick: () => void;
  className?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-14 h-14 text-xl flex-row gap-2 items-center justify-center rounded-[10px] p-2 text-black bg-gray-300 hover:bg-gray-50  dark:bg-white-0 dark:hover:bg-gray-50 ${className}`}
    >
      <Image width={26} height={26} alt="image" src={icon} />
    </button>
  );
};
