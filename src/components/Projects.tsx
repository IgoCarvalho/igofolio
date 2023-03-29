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

      <div className="mt-10 px-4 flex flex-wrap gap-5 justify-between">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
}
