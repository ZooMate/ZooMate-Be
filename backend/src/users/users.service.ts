import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
        region: createUserDto.region,
        userDesc: createUserDto.userDesc,
        profile: createUserDto.profile,
      },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.user.findUnique({ where: { userId } });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // 비밀번호 해시 처리
    if (updateUserDto.userPassword) {
      updateUserDto.userPassword = await bcrypt.hash(
        updateUserDto.userPassword,
        10,
      );
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    const { userPassword, ...safeData } = updated;
    return safeData;
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
