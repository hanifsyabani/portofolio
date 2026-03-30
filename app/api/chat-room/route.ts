import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { message, name, email, avatar } = await req.json()
        const userId = req.nextUrl.searchParams.get("userId")

        if (!message || !name || !email || !avatar) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }

        if (!userId) {
            return NextResponse.json({ error: "Missing userId" }, { status: 401 })
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })

        if (!user) {
            await prisma.user.create({
                data: {
                    id: userId,
                    name,
                    email,
                    avatar,
                    isAuthor: false,
                },
            })
        }

        const chatRoom = await prisma.chatRoom.create({
            data: {
                message,
                userId,
            },
        })

        return NextResponse.json({ chatRoom }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}


export async function GET() {
    try {
        const chatRoom = await prisma.chatRoom.findMany({
            include: {
                user: true
            },
            orderBy: {
                createdAt: "asc",
            },
        })

        return NextResponse.json({ data: chatRoom }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}