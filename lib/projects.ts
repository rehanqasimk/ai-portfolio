export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  content: string;
  technologies?: string[];
  date?: string;
  github?: string;
  website?: string;
  demo?: string;
}

// Replace with your actual data fetching logic
export async function getAllProjects(): Promise<Project[]> {
  // Example implementation
  // Could be from a CMS, database, or local files
  return [
    {
      slug: "ai-image-enhancer",
      title: "AI Image Enhancer",
      description: "Enhance your images using state-of-the-art AI models.",
      image: "/file.svg",
      content: "<p>This project uses deep learning to upscale and improve image quality. Try the live demo or check out the code on GitHub!</p>",
      technologies: ["Python", "TensorFlow", "Next.js"],
      github: "https://github.com/yourusername/ai-image-enhancer",
      website: "https://ai-image-enhancer.vercel.app",
      demo: "https://ai-image-enhancer.vercel.app/demo",
      date: "2025-07-01"
    },
    {
      slug: "video-style-transfer",
      title: "Video Style Transfer",
      description: "Apply artistic styles to videos in real-time.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      content: "<p>Transform your videos with neural style transfer. Supports multiple styles and formats.</p>",
      technologies: ["PyTorch", "OpenCV", "TypeScript"],
      github: "https://github.com/yourusername/video-style-transfer",
      website: "https://video-style-transfer.vercel.app",
      demo: "https://video-style-transfer.vercel.app/demo",
      date: "2025-06-15"
    },
    {
      slug: "chatbot-gpt4",
      title: "GPT-4 Chatbot",
      description: "Conversational AI powered by GPT-4.",
      image: "/globe.svg",
      content: "<p>Chat with an intelligent assistant. Integrates with Slack and Discord.</p>",
      technologies: ["Node.js", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com/yourusername/gpt4-chatbot",
      website: "https://gpt4-chatbot.vercel.app",
      demo: "https://gpt4-chatbot.vercel.app/demo",
      date: "2025-05-20"
    },
    // Add more creative projects here
  ];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find(project => project.slug === slug) || null;
}