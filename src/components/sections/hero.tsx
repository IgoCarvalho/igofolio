import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { CopyEmailField } from "../copy-email";
import { Button } from "../ui/button";
import { GridPattern } from "../ui/grid-pattern";

export function HeroSection() {
  return (
    <section className="min-h-screen p-4 flex">
      <div className="relative grow mx-auto rounded-xl py-25 px-4 sm:px-15 space-y-15 lg:space-y-0 lg:flex flex-row-reverse items-center justify-between overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border container xl:max-w-7xl ">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />

        <Image
          src="/images/my-photo.png"
          alt="billing"
          width={599}
          height={647}
          className="lg:w-[45%]"
        />

        <div className="space-y-10 lg:w-[45%]">
          <div className="inline-flex bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full px-3 py-2 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for Work</span>
            </div>
          </div>

          <h1 className="text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Hello, I&apos;m <br /> Igo Carvalho <br />{" "}
            <span className="block mt-1 sm:mt-4 font-display text-lime-500 dark:text-lime-300 italic">
              FrontEnd Developer
            </span>
          </h1>

          <p className="text-muted-foreground sm:text-lg max-w-lg">
            With over 3 years of experience, developing solutions to meet the
            needs of different clients, from e-commerce and institutional
            websites to SaaS platforms.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full size-12"
              asChild
            >
              <a
                href="https://github.com/IgoCarvalho"
                title="GitHub"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full size-12"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/igocarvalho/"
                title="LinkedIn"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </Button>

            <CopyEmailField />
          </div>
        </div>
      </div>
    </section>
  );
}
