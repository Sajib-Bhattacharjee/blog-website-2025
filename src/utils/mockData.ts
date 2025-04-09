import { BlogPost, Comment } from "../types";

// Mock comments data
export const mockComments: Comment[] = [
  {
    id: "c1",
    postId: "1",
    author: "Alex Johnson",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Great introduction to React! This helped me get started with my first project.",
    date: "2024-03-17",
    likes: 5,
  },
  {
    id: "c2",
    postId: "1",
    author: "Sarah Williams",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "I would add that React hooks have really changed the game for functional components.",
    date: "2024-03-18",
    likes: 3,
  },
  {
    id: "c3",
    postId: "2",
    author: "Michael Brown",
    authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "CSS can be tricky but this article makes it much clearer!",
    date: "2024-03-16",
    likes: 2,
  },
  {
    id: "c4",
    postId: "3",
    author: "Emily Davis",
    authorAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
    content: "TypeScript has been a game-changer for our team's productivity.",
    date: "2024-03-15",
    likes: 7,
  },
];

// Helper function to generate a large number of mock blog posts
const generateMockPosts = (): BlogPost[] => {
  const existingPosts = [
    // Keep existing posts first for consistency
    {
      id: "1",
      title: "Getting Started with React",
      slug: "getting-started-with-react",
      content: "React is a JavaScript library for building user interfaces...",
      excerpt:
        "Learn the basics of React and how to create your first component.",
      author: "John Doe",
      authorBio:
        "Senior Frontend Developer with 8+ years of experience. Passionate about React and modern JavaScript.",
      authorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "2024-03-15",
      thumbnail: "https://picsum.photos/800/400?random=1",
      tags: ["react", "javascript", "web development"],
      categories: ["Programming", "Web Development"],
      featured: true,
      comments: mockComments.filter((comment) => comment.postId === "1"),
      likes: 42,
    },
    {
      id: "2",
      title: "The Art of CSS",
      slug: "the-art-of-css",
      content: "CSS is the language we use to style an HTML document...",
      excerpt:
        "Master the fundamentals of CSS and create beautiful web designs.",
      author: "Jane Smith",
      authorBio:
        "UI/UX Designer and CSS expert. Creating beautiful web experiences for over 5 years.",
      authorAvatar: "https://randomuser.me/api/portraits/women/1.jpg",
      date: "2024-03-14",
      thumbnail: "https://picsum.photos/800/400?random=2",
      tags: ["css", "web design", "styling"],
      categories: ["Design", "Web Development"],
      comments: mockComments.filter((comment) => comment.postId === "2"),
      likes: 35,
    },
    {
      id: "3",
      title: "TypeScript Best Practices",
      slug: "typescript-best-practices",
      content:
        "TypeScript adds static typing to JavaScript, making it easier to write and maintain large applications...",
      excerpt:
        "Discover the best practices for writing clean and maintainable TypeScript code.",
      author: "Mike Johnson",
      authorBio:
        "Software architect specializing in TypeScript and Node.js. Speaker and technical writer.",
      authorAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
      date: "2024-03-13",
      thumbnail: "https://picsum.photos/800/400?random=3",
      tags: ["typescript", "javascript", "programming"],
      categories: ["Programming", "Web Development"],
      featured: true,
      comments: mockComments.filter((comment) => comment.postId === "3"),
      likes: 28,
    },
    {
      id: "4",
      title: "Responsive Web Design Techniques",
      slug: "responsive-web-design-techniques",
      content:
        "Responsive web design is an approach to web design that makes web pages render well on a variety of devices...",
      excerpt: "Learn how to create websites that look great on any device.",
      author: "Sarah Chen",
      authorBio:
        "Frontend developer and responsive design specialist. Advocate for mobile-first design principles.",
      authorAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "2024-03-12",
      thumbnail: "https://picsum.photos/800/400?random=4",
      tags: ["responsive", "css", "web design"],
      categories: ["Design", "Web Development"],
      likes: 21,
    },
    {
      id: "5",
      title: "Introduction to GraphQL",
      slug: "introduction-to-graphql",
      content:
        "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data...",
      excerpt: "Discover how GraphQL can simplify your API development.",
      author: "David Kim",
      authorBio:
        "Backend developer and API architect. Expert in GraphQL and RESTful services.",
      authorAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
      date: "2024-03-11",
      thumbnail: "https://picsum.photos/800/400?random=5",
      tags: ["graphql", "api", "web development"],
      categories: ["Programming", "Web Development"],
      featured: true,
      likes: 32,
    },
  ];

  // Titles for different categories to generate mock posts
  const categoryTitles = {
    Programming: [
      "Python for Data Science: A Beginner's Guide",
      "Understanding Object-Oriented Programming Concepts",
      "Functional Programming Paradigms",
      "Building RESTful APIs with Node.js",
      "Mastering Regular Expressions",
      "Essential Java Design Patterns",
      "Asynchronous Programming in JavaScript",
      "Understanding Big O Notation",
      "Blockchain Programming Fundamentals",
      "Dive into Data Structures",
      "Algorithmic Problem Solving Techniques",
      "Test-Driven Development in Practice",
      "Clean Code Principles",
      "Debugging Like a Pro",
      "Understanding Memory Management",
      "Compiler Design Basics",
      "Programming Language Theory",
      "Advanced SQL Techniques",
      "Mastering Git Workflows",
      "Parallel Programming Concepts",
    ],
    "Web Development": [
      "Modern CSS Frameworks Comparison",
      "Progressive Web Apps from Scratch",
      "Web Authentication Best Practices",
      "Server-Side Rendering vs. Client-Side Rendering",
      "Working with WebSockets",
      "Web Performance Optimization Techniques",
      "Frontend Testing Strategies",
      "Modern JavaScript Modules",
      "Building Accessible Web Applications",
      "Understanding the DOM",
      "Creating Custom Web Components",
      "Full-Stack Development with MERN",
      "Web Security Fundamentals",
      "Static Site Generators Overview",
      "Optimizing Web Assets",
      "Real-time Web Applications",
      "Headless CMS for Modern Websites",
      "API Design Best Practices",
      "Single Page Applications Architecture",
      "CSS Grid Layout Mastery",
    ],
    Design: [
      "UI/UX Design Principles for Developers",
      "Creating Effective Design Systems",
      "Color Theory in Web Design",
      "Typography Fundamentals for the Web",
      "Mastering Figma for Web Designers",
      "Animation Principles in UI Design",
      "Mobile-First Design Approach",
      "Design Thinking for Developers",
      "Creating User-Centered Interfaces",
      "Visual Hierarchy in Web Design",
      "Accessibility in Design",
      "The Psychology of Web Design",
      "Responsive Design Patterns",
      "Designing for Dark Mode",
      "Logo Design Fundamentals",
      "Wireframing and Prototyping Techniques",
      "Design Handoff Best Practices",
      "Minimalist Design Principles",
      "Creating Consistent User Experiences",
      "Microinteractions in UI Design",
    ],
    Technology: [
      "Introduction to Machine Learning",
      "Exploring Cloud Computing Services",
      "The Internet of Things (IoT) Explained",
      "Understanding Containerization with Docker",
      "Cybersecurity Essentials",
      "Quantum Computing Basics",
      "Big Data Analytics Tools",
      "Artificial Intelligence in Business",
      "Edge Computing vs. Cloud Computing",
      "Virtual and Augmented Reality Development",
      "5G Technology and Its Impact",
      "Blockchain Beyond Cryptocurrency",
      "Understanding DevOps Practices",
      "Microservices Architecture",
      "Natural Language Processing Fundamentals",
      "Computer Vision Applications",
      "Robotics Programming Basics",
      "Data Privacy and GDPR",
      "Serverless Computing Architecture",
      "Understanding Neural Networks",
    ],
    Tutorials: [
      "Build a Portfolio Website with HTML and CSS",
      "Creating a Todo App with React",
      "Setting Up CI/CD Pipelines",
      "Building a RESTful API with Express",
      "Deploy Your First Application on AWS",
      "Creating Custom WordPress Themes",
      "Build a Chat Application with Socket.io",
      "Data Visualization with D3.js",
      "Create a Blog with Gatsby",
      "Building a Mobile App with React Native",
      "Authentication System with JWT",
      "Database Modeling with MongoDB",
      "Build an E-commerce Site with Shopify",
      "Creating Custom NPM Packages",
      "Automated Testing with Jest",
      "Build a Desktop App with Electron",
      "Creating a CMS from Scratch",
      "Setting Up a Linux Server",
      "Building Chrome Extensions",
      "Create a Real-time Dashboard with Firebase",
    ],
  };

  // Other fields for generated posts
  const authors = [
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Senior Frontend Developer with 8+ years of experience.",
    },
    {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "UI/UX Designer and CSS expert.",
    },
    {
      name: "Mike Johnson",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "Software architect specializing in TypeScript and Node.js.",
    },
    {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Frontend developer and responsive design specialist.",
    },
    {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      bio: "Backend developer and API architect.",
    },
    {
      name: "Lisa Brown",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      bio: "Full-stack developer with a passion for clean code.",
    },
    {
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      bio: "DevOps engineer and cloud architecture expert.",
    },
    {
      name: "Emma Taylor",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "Mobile app developer and UX enthusiast.",
    },
  ];

  const tags = [
    "javascript",
    "react",
    "node.js",
    "html",
    "css",
    "typescript",
    "python",
    "java",
    "php",
    "ruby",
    "web design",
    "ui/ux",
    "frontend",
    "backend",
    "full-stack",
    "responsive",
    "accessibility",
    "performance",
    "seo",
    "testing",
    "devops",
    "cloud",
    "aws",
    "docker",
    "kubernetes",
    "databases",
    "sql",
    "nosql",
    "mongodb",
    "graphql",
    "api",
    "restful",
    "microservices",
    "architecture",
    "algorithms",
    "data structures",
    "machine learning",
    "ai",
    "design patterns",
    "best practices",
  ];

  const generatedPosts: BlogPost[] = [];
  let idCounter = existingPosts.length + 1;

  // Generate posts for each category
  Object.entries(categoryTitles).forEach(([category, titles]) => {
    titles.forEach((title, index) => {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");
      const author = authors[Math.floor(Math.random() * authors.length)];

      // Get random date within the last year
      const randomDate = new Date();
      randomDate.setDate(
        randomDate.getDate() - Math.floor(Math.random() * 365)
      );

      // Generate post tags
      const postTags: string[] = [];
      const numTags = 2 + Math.floor(Math.random() * 4); // 2-5 tags
      for (let i = 0; i < numTags; i++) {
        const randomTag = tags[Math.floor(Math.random() * tags.length)];
        if (!postTags.includes(randomTag)) {
          postTags.push(randomTag);
        }
      }

      // Add secondary categories sometimes
      const categories = [category];
      if (Math.random() > 0.6) {
        const otherCategories = Object.keys(categoryTitles).filter(
          (c) => c !== category
        );
        const secondaryCategory =
          otherCategories[Math.floor(Math.random() * otherCategories.length)];
        categories.push(secondaryCategory);
      }

      // Featured flag for some posts
      const featured = Math.random() > 0.9; // 10% chance of being featured

      // Mock content
      const contentParagraphs = 3 + Math.floor(Math.random() * 5); // 3-7 paragraphs
      const content = Array(contentParagraphs)
        .fill(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        )
        .join("\n\n");

      // Post excerpt
      const excerpt = `Explore ${title.toLowerCase()} in this comprehensive guide. Perfect for both beginners and experienced developers.`;

      // Add generated post
      generatedPosts.push({
        id: (idCounter++).toString(),
        title,
        slug,
        content,
        excerpt,
        author: author.name,
        authorBio: author.bio,
        authorAvatar: author.avatar,
        date: randomDate.toISOString().slice(0, 10),
        thumbnail: `https://picsum.photos/800/400?random=${idCounter}`,
        tags: postTags,
        categories,
        featured,
        likes: Math.floor(Math.random() * 50),
      });
    });
  });

  // Combine existing and generated posts
  return [...existingPosts, ...generatedPosts];
};

export const mockBlogPosts: BlogPost[] = generateMockPosts();

export const categories = [
  "Programming",
  "Web Development",
  "Design",
  "Technology",
  "Tutorials",
];

export const tags = [
  "react",
  "javascript",
  "web development",
  "css",
  "web design",
  "styling",
  "typescript",
  "programming",
  "responsive",
  "graphql",
  "api",
  "frontend",
  "backend",
  "cloud",
  "security",
  "testing",
  "mobile",
  "performance",
  "ui/ux",
  "devops",
];
