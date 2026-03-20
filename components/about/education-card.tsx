import Image from "next/image";
import { Card } from "../ui/card";

interface EducationCardProps {
    title: string;
    image: string;
    major: string;
    gpa: string;
    year: string;
    location: string;
}

export default function EducationCard({ title, image, major, gpa, year, location }: EducationCardProps) {
    return (
        <Card className="p-4 bg-linear-to-br from-neutral-900 to-neutral-950">
            <div className="flex items-center  gap-4">
                <div className="w-20 h-20">
                    <Image
                        src={image}
                        alt={title}
                        width={80}
                        height={80}
                        className="rounded-full w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{major}</p>
                    <p className="text-sm text-muted-foreground">{gpa}</p>
                    <p className="text-sm text-muted-foreground">{year}</p>
                    <p className="text-sm text-muted-foreground">{location}</p>
                </div>
            </div>
        </Card>
    )
}