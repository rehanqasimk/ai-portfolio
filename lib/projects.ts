export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  content: string;
  technologies?: string[];
  date?: string;
}

// Replace with your actual data fetching logic
export async function getAllProjects(): Promise<Project[]> {
  // Example implementation
  // Could be from a CMS, database, or local files
  return [
    {
      slug: "project-one",
      title: "Project One",
      description: "Description for project one",
      content: "<p>Detailed content for project one</p>",
      technologies: ["React", "Next.js", "TypeScript"]
    },
    // Add more projects
  ];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find(project => project.slug === slug) || null;
}