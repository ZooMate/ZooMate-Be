import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userId: string, password: string) {
    const user = await this.usersService.findByUserId(userId);
    if (user && (await bcrypt.compare(password, user.userPassword))) {
      const { userPassword, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(
      loginUserDto.userId,
      loginUserDto.userPassword,
    );
    if (!user) {
      throw new NotFoundException('존재하지 않는 유저입니다.');
    }
    const payload = {
      userId: user.userId,
      sub: user.id,
      userName: user.userName,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(data: CreateUserDto) {
    const exists = await this.usersService.findByUserId(data.userId);
    if (exists) {
      throw new UnauthorizedException('이미 가입된 이메일입니다.');
    }
    const user = await this.usersService.create(data);
    return user;
  }
}
