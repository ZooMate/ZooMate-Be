import { Injectable } from '@nestjs/common';
import { ChangeStatusMateDto } from './dto/change-status-mate.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetEntity } from 'src/pets/entities/pet.entity';

@Injectable()
export class MatesService {
  constructor(private prisma: PrismaService) {}

  // 찜 등록
  async createMate(dto: ChangeStatusMateDto) {
    const result = await this.prisma.mate.create({
      data: {
        userId: dto.userId,
        petId: dto.petId,
      },
    });
    return {
      message: '찜 등록 완료',
      data: result,
    };
  }

  // 찜 목록 조회 : 반려동물 정보만 필요하므로 PetEntity[]로 받아옴
  async findPetsByUser(userId: number): Promise<PetEntity[]> {
    const mates = await this.prisma.mate.findMany({
      where: { userId }, //userId가 일치하는 모든 레코드 가져옴
      select: { petId: true }, //userId 필터링 -> petId 컬럼만 가져옴
    });

    const petIds = mates.map((m) => m.petId); // 배열로 전환

    const pets = await this.prisma.pet.findMany({
      where: {
        id: { in: petIds }, // 배열 안에 있는 숫자를 아이디로 해서 조회
      },
    });

    return pets.map((p) => new PetEntity(p)); // 이 값들은 PetEntity 객체로 받아 배열로 전환
  }

  // 찜 해제
  async deleteMate(dto: ChangeStatusMateDto) {
    const result = await this.prisma.mate.delete({
      where: {
        userId_petId: {
          userId: dto.userId,
          petId: dto.petId,
        },
      },
    });
    return {
      message: '찜 해제 완료',
      data: result,
    };
  }
}
