import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        userId: string;
        userName: string;
        userPassword: string;
        userDesc: string | null;
        id: number;
        region: string | null;
        pets: number[];
        profile: string | null;
    }>;
    findByUserId(userId: string): Promise<{
        userId: string;
        userName: string;
        userPassword: string;
        userDesc: string | null;
        id: number;
        region: string | null;
        pets: number[];
        profile: string | null;
    } | null>;
    findById(id: number): Promise<{
        userId: string;
        userName: string;
        userPassword: string;
        userDesc: string | null;
        id: number;
        region: string | null;
        pets: number[];
        profile: string | null;
    } | null>;
}
