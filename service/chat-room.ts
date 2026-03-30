import axios from "axios";

interface ChatRoomInput {
    message: string;
    name: string;
    email: string;
    avatar: string;
}

export async function PostChat(data: ChatRoomInput, userId: string) {
    try {
        const res = await axios.post("/api/chat-room", data, { params: { userId } })

        if (res.status !== 200) throw new Error("Failed");
        return res.data;
    } catch (error) {
        throw error;
    }
}

export async function GetAllChatRoom() {
    try {
        const res = await axios.get("/api/chat-room")

        if (res.status !== 200) throw new Error("Failed");
        return res.data;
    } catch (error) {
        throw error;
    }
}