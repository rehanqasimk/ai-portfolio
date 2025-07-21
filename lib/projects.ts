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
      slug: "ai-agent-from-scratch",
      title: "Build an AI Agent from Scratch",
      description: "Create your own AI agent! Build a command line messaging interface and an agent loop to continuously interact with the user. Code tools from scratch for retrieving information and generating images from Dall-E. Manage the chat history to provide context with each prompt. Learn the bleeding-edge design patterns and resources for building modern agent-based API apps.",
    //   image: "/file.svg",
      content: `
        <h2 class="text-2xl font-bold mb-2">Developing Basic AI Agents for Learning and Experimentation</h2>
        <ul class="list-disc ml-6 mb-4">
          <li>Built a foundational AI agent from the ground up during the Frontend Masters workshop</li>
          <li>Focused on core agent architecture and implemented fundamental decision-making algorithms</li>
          <li>Demonstrated understanding of core AI principles and independent development capabilities</li>
        </ul>
        <p>This project showcases the process of designing and building a simple AI agent, emphasizing hands-on learning and experimentation with agent-based systems.</p>
      `,
      technologies: ["TypeScript", "OpenAI Chat Completion", "AI Agents", "LLMs"],
      github: "https://github.com/rehanqasimk/agent-from-scratch",
    //   website: "https://ai-image-enhancer.vercel.app",
    //   demo: "https://ai-image-enhancer.vercel.app/demo",
      date: "April, 2025"
    },
    // {
    //   slug: "video-style-transfer",
    //   title: "Video Style Transfer",
    //   description: "Apply artistic styles to videos in real-time.",
    //   video: "https://www.w3schools.com/html/mov_bbb.mp4",
    //   content: "<p>Transform your videos with neural style transfer. Supports multiple styles and formats.</p>",
    //   technologies: ["PyTorch", "OpenCV", "TypeScript"],
    //   github: "https://github.com/yourusername/video-style-transfer",
    //   website: "https://video-style-transfer.vercel.app",
    //   demo: "https://video-style-transfer.vercel.app/demo",
    //   date: "2025-06-15"
    // },
    // {
    //   slug: "chatbot-gpt4",
    //   title: "GPT-4 Chatbot",
    //   description: "Conversational AI powered by GPT-4.",
    //   image: "/globe.svg",
    //   content: "<p>Chat with an intelligent assistant. Integrates with Slack and Discord.</p>",
    //   technologies: ["Node.js", "OpenAI API", "Tailwind CSS"],
    //   github: "https://github.com/yourusername/gpt4-chatbot",
    //   website: "https://gpt4-chatbot.vercel.app",
    //   demo: "https://gpt4-chatbot.vercel.app/demo",
    //   date: "2025-05-20"
    // },
    // // Add more creative projects here
  ];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find(project => project.slug === slug) || null;
}