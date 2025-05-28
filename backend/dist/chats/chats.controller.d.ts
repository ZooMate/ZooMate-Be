import { ChatsService } from './chats.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { MessageEntity } from './entities/message.entitiy';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    createRoom(req: any, dto: CreateRoomDto): Promise<{
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
    getMessagesByRoom(roomId: string): Promise<MessageEntity[]>;
    sendMessage(req: any, roomId: number, dto: SendMessageDto): Promise<MessageEntity>;
    joinRoom(req: any, roomId: number): Promise<{
        id: number;
        name: string;
    }>;
    leaveRoom(req: any, roomId: number): Promise<{
        id: number;
        name: string;
    }>;
}
