export interface SkillCategory {
    color: string;
    name?: string;
    icon: React.ReactNode;
    description?: string;
}


export interface SkillProps {
    [key: string]: SkillCategory & {
        background: string;
        isActive: boolean;
    }
}