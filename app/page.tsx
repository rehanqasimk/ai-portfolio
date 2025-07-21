import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      <p className="mb-6 text-lg">Explore my AI projects below:</p>
      <ul className="grid gap-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <Link href={`/${project.slug}`}>
              <div className="flex items-center gap-4">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
