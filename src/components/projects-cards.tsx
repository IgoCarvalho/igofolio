"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { PROJECTS } from "@/data/projects";
import { GithubIcon, GlobeIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ProjectsCards() {
  const { theme } = useTheme();

  return (
    <>
      {PROJECTS.map((project) => (
        <li key={project.id} className="inline-flex">
          <Card className=" overflow-hidden rounded-xl w-full border-none p-0 shadow-none">
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-0 grow"
            >
              <div className=" flex flex-col gap-6 pb-6 h-full">
                <div className="p-px">
                  <div className="aspect-video overflow-hidden rounded-xl">
                    <Image
                      width={315}
                      height={177}
                      src={project.imageUrl}
                      alt="DevOps Automation Suite"
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                </div>
                <CardHeader className="gap-3">
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge
                      variant="secondary"
                      className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full"
                      key={tech}
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.siteLink && (
                    <Button size="sm" asChild>
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GlobeIcon />
                        Website
                      </a>
                    </Button>
                  )}

                  {project.repoLink && (
                    <Button size="sm" asChild>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </MagicCard>
          </Card>
        </li>
      ))}
    </>
  );
}
