import { Project } from '@/types/project';
import Image from 'next/image';
import { ReactJsIcon } from './icons/ReactJsIcon';
import { TechnologyIcon } from './TechnologyIcon';
import { Tooltip } from './Tooltip';

interface ProjectCardProps {
  data: Project;
}

export function ProjectCard({ data }: ProjectCardProps) {
  return (
    <div className="max-w-sm border flex flex-col rounded-lg shadow bg-zinc-800 border-zinc-700">
      <a href={data.siteLink} className="max-w-sm h-64 block">
        <Image
          width={500}
          height={500}
          className="rounded-t-lg w-full h-full max-h-64 object-cover"
          src={data.imageUrl}
          alt="Nlw"
        />
      </a>
      <div className="p-5 flex flex-col flex-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>

        <div className="flex  justify-between mt-auto">
          <div className="flex gap-2">
            <Tooltip title="Repositório no GitHub">
              <a
                href={data.repoLink}
                className="flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none border-zinc-400 border bg-zinc-500 hover:bg-zinc-600 focus:ring-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#f1f1fe"
                  viewBox="0 0 256 256"
                >
                  <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                </svg>
                Repositório
              </a>
            </Tooltip>

            <Tooltip title="Acesse o site online">
              <a
                href={data.siteLink}
                className="flex gap-2  items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none border-violet-500 border  focus:ring-purple-500 bg-violet-600 hover:bg-violet-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#f1f1fe"
                  viewBox="0 0 256 256"
                >
                  <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                </svg>
                Online
              </a>
            </Tooltip>
          </div>

          <TechnologyIcon technologies={data.technologies} />
        </div>
      </div>
    </div>
  );
}
