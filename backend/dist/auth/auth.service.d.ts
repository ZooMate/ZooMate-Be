import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(userId: string, password: string): Promise<{
        userId: string;
        userName: string;
        userDesc: string | null;
        id: number;
        region: string | null;
        pets: number[];
        profile: string | null;
    } | null>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    signup(data: CreateUserDto): Promise<{
        userId: string;
        userName: string;
        userPassword: string;
        userDesc: string | null;
        id: number;
        region: string | null;
        pets: number[];
        profile: string | null;
    }>;
}
