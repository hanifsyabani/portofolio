
import axios from "axios";

interface ContactFormInput {
    name: string;
    email: string;
    message: string;
}

export async function PostMessage(data: ContactFormInput) {
    try {
        const res = await axios.post("/api/contact", data)

        if (res.status !== 200) throw new Error("Failed");
        return res.data;
    } catch (error) {
        throw error;
    }
}