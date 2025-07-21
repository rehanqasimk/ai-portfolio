import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">AI Portfolio</h1>
          <p className="text-lg text-slate-600">AI Stuff Worked on.</p>
        </div>
        <ul className="flex flex-col gap-8">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-slate-200 p-6 hover:scale-[1.02] hover:shadow-2xl transition-transform duration-200 flex flex-row gap-6 items-center"
            >
              <Link href={`/${project.slug}`} className="flex items-center gap-6 flex-1">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={110}
                    height={110}
                    className="rounded-xl shadow border border-slate-100 object-cover"
                  />
                )}
                {project.video && (
                  <video
                    src={project.video}
                    width={110}
                    height={110}
                    controls
                    className="rounded-xl shadow border border-slate-100 object-cover"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h2>
                  {project.date && (
                    <div className="text-xs text-slate-400 mb-1">{new Date(project.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}</div>
                  )}
                  <p className="text-slate-600 italic mb-2">{project.description}</p>
                </div>
              </Link>
              <div className="flex gap-3 mt-2 flex-shrink-0">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                    GitHub
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline-block"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
                    Website
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline-block"><path d="M8 17l8-5-8-5v10z"/></svg>
                    Demo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
