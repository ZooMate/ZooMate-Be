import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { UpdateAnswerDto } from './dto/update-answer.dto';
// import { CreateAnswerDto } from './dto/create-answer.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AzureStorageInterceptor } from 'src/azure-storage/azure-storage.interceptor';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreatePetDto } from './dto/create-pet.dto';
import { PetEntity } from './entities/pet.entity';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
@ApiTags('pets')
@ApiBearerAuth()
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('pets')
  @UseInterceptors(
    FilesInterceptor('files', 5, {
      limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
      },
      fileFilter: (req, file, cb) => {
        const allowedType = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'application/pdf',
        ];
        if (allowedType.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new BadRequestException('Invalid file type'), false);
        }
      },
    }),
    AzureStorageInterceptor,
  )
  @ApiOperation({ summary: '게시글 생성' })
  async createPet(@Request() req, @Body() dto: CreatePetDto) {
    const pet = await this.petsService.createPet(req.user.id, dto, req.files);
    return new PetEntity(pet);
  }

  // 전체 게시글 조회
  @Get('pets')
  @ApiOperation({ summary: '전체 게시글 조회' })
  async getPets() {
    const pets = await this.petsService.getPets();
    return pets.map((pet) => new PetEntity(pet || {}));
  }

  // 단일 게시글 조회
  @Get('pets/:id')
  @ApiOperation({ summary: '단일 게시글 조회' })
  async getPetById(@Param('id') id: string) {
    const pet = await this.petsService.getPetById(Number(id));
    return new PetEntity(pet || {});
  }

  // 게시글 수정
  @UseGuards(JwtAuthGuard)
  @Patch('pets/:id')
  @ApiOperation({ summary: '게시글 수정' })
  async updatePet(
    @Request() req,
    @Param('id') id: string,
    @Body() dto: UpdatePetDto,
  ) {
    const pet = await this.petsService.updatePet(Number(id), req.user.id, dto);
    return new PetEntity(pet || {});
  }

  // 게시글 삭제
  @UseGuards(JwtAuthGuard)
  @Delete('pets/:id')
  @ApiOperation({ summary: '게시글 삭제' })
  async deletePet(@Request() req, @Param('id') id: string) {
    return this.petsService.deletePet(Number(id), req.user.id);
  }
}
