import { ReactNode } from 'react';

type TooltipProps = {
  title: string;
  children: ReactNode;
};

export function Tooltip({ title, children }: TooltipProps) {
  return (
    <div className="relative group">
      <span className="whitespace-nowrap	 absolute block bg-gray-700 text-sm font-medium opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 py-1 px-2 rounded-lg bottom-tooltip left-1/2 -translate-x-1/2">
        {title}
      </span>
      {children}
    </div>
  );
}
