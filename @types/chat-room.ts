export interface ChatRoom {
    id: string;
    userId: string;
    name: string;
    email: string;
    avatar: string;
    message: string;
    createdAt: Date;
    isMe: boolean;
}