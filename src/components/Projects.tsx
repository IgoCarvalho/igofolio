import { PROJECTS } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section className="xl:max-w-[1280px] w-full mx-auto py-10">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Projetos</h2>
        <p className="font-medium text-lg mt-3">
          Estes são alguns projetos que venho desenvolvendo ultimamente.
        </p>
      </div>

      <div className="mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>

      <div className="py-20 flex flex-col gap-5 items-center">
        <p className="text-lg">
          Você pode encontrar mais projetos em meu Github
        </p>
        <a
          href="https://github.com/IgoCarvalho"
          className="flex items-center gap-3 border focus:outline-none focus:ring-4 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 bg-neutral-700 text-white border-neutral-500 hover:bg-neutral-600 hover:border-neutral-600 focus:ring-neutral-700"
        >
          Link para meu Github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#cdcdda"
            viewBox="0 0 256 256"
          >
            <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
