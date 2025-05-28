import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword: string = await (bcrypt as any).hash(
      createUserDto.userPassword,
      10,
    );
    return this.prisma.user.create({
      data: {
        userId: createUserDto.userId,
        userName: createUserDto.userName,
        userPassword: hashedPassword,
      },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.user.findUnique({ where: { userId } });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
