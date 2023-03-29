import { ReactElement } from 'react';
import { AngularIcon } from './icons/AngularIcon';
import { NodeJsIcon } from './icons/NodeJsIcon';
import { ReactJsIcon } from './icons/ReactJsIcon';
import { VueJsIcon } from './icons/VueJsIcon';

interface TechnologyIconProps {
  technologies: string[];
}

type IconTechnology = 'react' | 'vue' | 'node' | 'angular';

const icons: Record<IconTechnology, ReactElement> = {
  react: <ReactJsIcon />,
  vue: <VueJsIcon />,
  node: <NodeJsIcon />,
  angular: <AngularIcon />,
};

const technologiesStyles: Record<IconTechnology, string> = {
  react: 'bg-sky-600/20 border-sky-500',
  vue: 'bg-teal-600/20 border-teal-500',
  node: 'bg-green-700/20 border-green-600',
  angular: 'bg-red-700/20 border-red-600',
};

export function TechnologyIcon({ technologies }: TechnologyIconProps) {
  function getPrimaryTechIcon() {
    const tech = technologies[0].toLowerCase().trim();

    return icons[tech as IconTechnology];
  }

  function getPrimaryTechStyles() {
    const tech = technologies[0].toLowerCase().trim();

    return technologiesStyles[tech as IconTechnology];
  }

  return (
    <div className="relative group">
      <span className="group-hover:invisible absolute -top-3 -right-3 h-6 w-6 outline outline-1 outline-gray-500 text-xs font-medium flex justify-center items-center bg-gray-600 rounded-full shadow">
        +{technologies.length - 1}
      </span>
      {technologies.length > 0 && (
        <ul className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 right-0 w-48 text-sm font-medium shadow border rounded-lg bg-gray-700 border-gray-600 text-white">
          {technologies.map((t) => (
            <li
              key={t}
              className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
      <div
        className={`rounded-lg w-10 h-10 flex justify-center items-center border ${getPrimaryTechStyles()}`}
      >
        {getPrimaryTechIcon()}
      </div>
    </div>
  );
}
