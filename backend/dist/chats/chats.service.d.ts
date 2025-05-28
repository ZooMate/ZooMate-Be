import { PrismaService } from 'src/prisma/prisma.service';
import { ChatsGateway } from './chats.gateway';
export declare class ChatsService {
    private prisma;
    private chatsGateway;
    constructor(prisma: PrismaService, chatsGateway: ChatsGateway);
    createRoom(name: string): Promise<{
        id: number;
        name: string;
    }>;
    getRooms(): Promise<({
        users: {
            userId: string;
            userName: string;
            userPassword: string;
            userDesc: string | null;
            id: number;
            region: string | null;
            pets: number[];
            profile: string | null;
        }[];
    } & {
        id: number;
        name: string;
    })[]>;
    createMessage(data: {
        chatRoomId: number;
        userId: number;
        content: string;
    }): Promise<{
        user: {
            userId: string;
            userName: string;
            userPassword: string;
            userDesc: string | null;
            id: number;
            region: string | null;
            pets: number[];
            profile: string | null;
        };
    } & {
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        chatRoomId: number;
    }>;
    getMessagesByRoom(chatRoomId: number): Promise<({
        user: {
            userId: string;
            userName: string;
            userPassword: string;
            userDesc: string | null;
            id: number;
            region: string | null;
            pets: number[];
            profile: string | null;
        };
    } & {
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        chatRoomId: number;
    })[]>;
    joinRoom(userId: number, roomId: number): Promise<{
        id: number;
        name: string;
    }>;
    leaveRoom(userId: number, roomId: number): Promise<{
        id: number;
        name: string;
    }>;
}
