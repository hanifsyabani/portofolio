import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const achievements = await prisma.achievement.findMany({
            where: {
                isShow: true,
            },
        });

        return new Response(JSON.stringify(achievements), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error", error:String(error) }), {
            status: 500,
        });
    }
}