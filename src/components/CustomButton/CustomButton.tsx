import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IconButtonProps {
  icon: string;
  url: string;
  className?: string;
  text: string;
}

export const CustomButton: FC<IconButtonProps> = ({
  icon,
  url,
  className,
  text,
}) => {
  return (
    <Link href={url} target="_blank">
      <button
        className={`flex w-36 h-14 text-xl flex-row gap-2 items-center justify-center rounded-[10px] p-2 text-black bg-gray-300 hover:bg-gray-50  dark:bg-white-0 dark:hover:bg-gray-50 ${className}`}
      >
        <Image width={26} height={26} alt="image" src={icon} />
        {text}
      </button>
    </Link>
  );
};
