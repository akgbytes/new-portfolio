"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconGlobe,
  IconGlobeOff,
  IconWorld,
} from "@tabler/icons-react";
import { Project } from "@/data";

interface Props extends Project {
  className?: string;
}

export function ProjectCard({
  title,
  href,
  github,
  description,
  dates,
  technologies,
  image,
  video,
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <div
        className={cn(
          "group relative overflow-hidden border border-dashed border-black/20  dark:border-neutral-700 rounded-xl transition-all duration-300 flex flex-col h-full",
          className
        )}
      >
        {/* MEDIA */}
        <Link href={href} className="block h-40 w-full overflow-hidden">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-40 w-full object-cover object-top pointer-events-none"
            />
          )}

          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top"
            />
          )}
        </Link>

        {/* CONTENT */}
        <CardHeader className="px-4 py-3">
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CardTitle className="text-base font-semibold">{title}</CardTitle>

            <time className="font-sans text-[11px]">{dates}</time>

            <p className="font-sans text-xs text-muted-foreground leading-snug">
              {description}
            </p>
          </motion.div>
        </CardHeader>

        {/* TAGS */}
        <CardContent className="px-4 pb-3">
          {technologies && technologies.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="px-1 py-px text-[10px]"
                  variant="secondary"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>
          )}
        </CardContent>

        {/* LINKS */}
        <CardFooter className="px-4 pb-3">
          <motion.div
            className="flex flex-row flex-wrap items-start gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href={href} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <IconWorld />
                Website
              </Badge>
            </Link>
            <Link href={github} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <IconBrandGithub />
                Source
              </Badge>
            </Link>
          </motion.div>
        </CardFooter>
      </div>
    </motion.div>
  );
}
