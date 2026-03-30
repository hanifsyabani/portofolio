export interface ChatRoom {
    id: string;
    userId: string;
    message: string;
    createdAt: Date;
    user: {
        name: string;
        email: string;
        avatar: string;
        isAuthor: boolean
    }
}