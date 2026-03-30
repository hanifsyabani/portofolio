import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { message,name,email,avatar} = await req.json()
        const userId = req.nextUrl.searchParams.get("userId")

        if (!message ) {
            return NextResponse.json({ error: "Missing message or userId" }, { status: 400 })
        }

        if (!userId) {
            return NextResponse.json({ error: "Missing message or userId" }, { status: 401 })
        }

        const chatRoom = await prisma.chatRoom.create({
            data: {
                message,
                name,
                email,
                avatar,
                userId,
            },
        })

        return NextResponse.json({ chatRoom }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

 
export async function GET(){
    try {
        const chatRoom = await prisma.chatRoom.findMany({
            orderBy: {
                createdAt: "asc",
            },
        })

        return NextResponse.json({data: chatRoom }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}