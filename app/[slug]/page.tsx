import Link from "next/link";
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-blue-600 hover:text-blue-800 transition-colors font-medium">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          Back to Main
        </Link>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-slate-200">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight drop-shadow">{project.title}</h1>
          <p className="text-lg text-slate-600 mb-6 italic">{project.description}</p>
          {project.image && (
            <div className="mb-8 flex justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-xl shadow-lg border border-slate-100 w-full max-w-md object-cover"
              />
            </div>
          )}
          <div className="prose prose-lg max-w-none text-slate-800 mb-8">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
          {project.technologies && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3 text-slate-800">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
