import { ProjectsCards } from "../projects-cards";

export function ProjectsSection() {
  return (
    <section className="px-4 flex">
      <div className="container xl:max-w-7xl mx-auto py-8 md:py-15 space-y-8">
        <div className="max-w-xl space-y-4">
          <h2 className="text-3xl">Featured Projects</h2>
          <p className="text-muted-foreground sm:text-lg">
            A selection of projects that demonstrate my expertise in full-stack
            development and modern DevOps practices.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectsCards />
        </ul>
      </div>
    </section>
  );
}
