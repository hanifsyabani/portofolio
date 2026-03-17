
import { SkillCategory } from "@/@types/stack";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPrisma,
    SiJavascript,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiSupabase,
    SiFirebase,
} from "react-icons/si";

export const skillCategories: SkillCategory[] = [
    {
        color: "from-blue-400 to-blue-600",
        name: "React",
        icon: <SiReact />,
        proficiency: 95,
        description: "Modern UI library",
    },
    {
        color: "from-gray-800 to-black",
        name: "Next.js",
        icon: <SiNextdotjs />,
        proficiency: 90,
        description: "React framework",
    },
    {
        color: "from-blue-500 to-blue-700",
        name: "TypeScript",
        icon: <SiTypescript />,
        proficiency: 92,
        description: "Type-safe JavaScript",
    },
    {
        color: "from-cyan-400 to-blue-500",
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        proficiency: 93,
        description: "Utility CSS framework",
    },
    {
        color: "from-green-500 to-green-700",
        name: "Node.js",
        icon: <SiNodedotjs />,
        proficiency: 88,
        description: "JS runtime",
    },
    {
        color: "from-cyan-500 to-blue-600",
        name: "Prisma",
        icon: <SiPrisma />,
        proficiency: 87,
        description: "ORM for databases",
    },
    {
        color: "from-yellow-300 to-yellow-500",
        name: "JavaScript",
        icon: <SiJavascript />,
        proficiency: 94,
        description: "Core language",
    },
    {
        color: "from-blue-500 to-blue-700",
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        proficiency: 86,
        description: "Relational DB",
    },
    {
        color: "from-orange-500 to-red-600",
        name: "Git",
        icon: <SiGit />,
        proficiency: 93,
        description: "Version control",
    },
    {
        color: "from-blue-400 to-blue-600",
        name: "Docker",
        icon: <SiDocker />,
        proficiency: 80,
        description: "Containerization",
    },
    {
        color: "from-emerald-400 to-teal-600",
        name: "Supabase",
        icon: <SiSupabase />,
        proficiency: 85,
        description: "Backend as a Service",
    },
    {
        name: "Firebase",
        color: "from-yellow-300 to-orange-500",
        icon: <SiFirebase/>,
        proficiency: 82,
        description: "Realtime DB & Auth",
    }
];