import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<{
        userId: string;
        userName: string;
        userPassword: string;
        userDesc: string | null;
        id: number;
        region: string | null;
        pets: number[];
        profile: string | null;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
