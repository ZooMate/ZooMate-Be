import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async createPet(
    ownerId: number,
    createPetDto: CreatePetDto,
    files: Express.Multer.File[],
  ) {
    const pet = await this.prisma.pet.create({
      data: {
        ...createPetDto,
        ownerId,
      },
    });

    if (files && files.length > 0) {
      const attachmentPromise = files.map(async (file) => {
        return this.prisma.attachment.create({
          data: {
            petId: pet.id,
            fileName: file.originalname,
            fileUrl: file['url'],
            fileSize: file.size,
            fileType: file.mimetype,
          },
        });
      });
      await Promise.all(attachmentPromise);
    }
    return this.prisma.pet.findUnique({
      where: { id: pet.id },
      include: {
        owner: true,
        attachments: true,
      },
    });
  }

  // 전체 게시글 조회
  async getPets() {
    return this.prisma.pet.findMany({
      include: { owner: true, answers: true },
      orderBy: { id: 'desc' },
    });
  }

  // 단일 게시글 조회
  async getPetById(id: number) {
    return this.prisma.pet.findUnique({
      where: { id },
      include: { owner: true, answers: true },
    });
  }

  // 게시글 수정
  async updatePet(id: number, userId: number, dto: UpdatePetDto) {
    const pet = await this.prisma.pet.findUnique({ where: { id } });
    if (!pet || pet.ownerId !== userId)
      throw new Error('권한 없음 또는 게시글 없음');
    return this.prisma.pet.update({ where: { id }, data: dto });
  }

  // 게시글 삭제
  async deletePet(id: number, userId: number) {
    const pet = await this.prisma.pet.findUnique({ where: { id } });
    if (!pet || pet.ownerId !== userId)
      throw new Error('권한 없음 또는 게시글 없음');
    return this.prisma.pet.delete({ where: { id } });
  }
}
