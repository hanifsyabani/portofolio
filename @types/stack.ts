export type SkillCategory = {
    color: string;
    name?: string;
    icon: React.ReactNode;
    description?: string;
}


export type SkillProps = {
    [key: string]: SkillCategory & {
        background: string;
        isActive: boolean;
    }
}