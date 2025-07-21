import Link from "next/link";
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-10 px-4">
      <Link href="/" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Back to Main
      </Link>
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      
      <div className="mb-8">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-lg shadow-md"
          />
        )}
      </div>
      
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
      </div>
      
      {project.technologies && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
